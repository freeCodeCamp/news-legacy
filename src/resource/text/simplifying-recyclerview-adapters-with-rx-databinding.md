---
author: Ahmed Rizwan
authorTwitter: https://twitter.com/sudo_rizwan
authorFacebook: none
title: "Simplifying RecyclerView Adapters with Rx &amp; Databinding"
subTitle: "I recently wanted to dive deeper into Rx. So I experimented with Rx and the RecyclerView Adapters, and the results were pretty interestin..."
coverSrc: https://cdn-images-1.medium.com/max/2000/1*q63b1qjfmWKwQt_MPjYhDQ.png
url: https://medium.freecodecamp.org/simplifying-recyclerview-adapters-with-rx-databinding-f02ebed0b386
id: simplifying-recyclerview-adapters-with-rx-databinding-f02ebed0b386
date: 2015-12-10T16:03:17.021Z
tags: [
  "Android",
  "Rxandroid",
  "Recyclerview",
  "Mobile App Development",
  "Programming"
]
---
# Simplifying RecyclerView Adapters with Rx & Databinding







![](https://cdn-images-1.medium.com/max/2000/1*q63b1qjfmWKwQt_MPjYhDQ.png)







I recently wanted to dive deeper into Rx. So I experimented with Rx and the RecyclerView Adapters, and the results were pretty interesting!

With Rx in mind, I set out to accomplish three things:

1.  Create a RecyclerView adapter which should be **generic** — one adapter class to rule them all!
2.  It should return **bindings** in the form of Rx streams!
3.  There should also be an option for supporting multiple item **types**!

Now, you may be thinking: this isn’t really necessary. I mean why use Rx in the first place with RecyclerAdapters? And why exactly do you need bindings as Rx streams?

Well that’s true. Personally, I thought it’d be a good experiment to incorporate Rx into RecyclerView Adapters, instead of using simple callbacks or delegates. So it was sort of experimental.



![](https://cdn-images-1.medium.com/max/1600/1*6oS0HYL3OOVu9b4PupalmA.gif)



So I wrote a library called [**RxRecyclerAdapter**](https://github.com/ahmedrizwan/RxRecyclerAdapter) to get Rx to work with the Adapters. Let’s break down how it simplifies use ofthe recycler adapters.

#### RxDataSource simplifies the use of RxRecyclerAdapter

Let’s say you have a beautiful String array list that you want to display:

<pre name="14dc" id="14dc" class="graf graf--pre graf-after--p">//Dummy DataSet  
dataSet = new ArrayList<>();  
dataSet.add("this");  
dataSet.add("is");  
dataSet.add("an");  
dataSet.add("example");  
dataSet.add("of rx!");</pre>

Here’s what you would do:

1.  Enable data binding by adding this into build.gradle

<pre name="15d8" id="15d8" class="graf graf--pre graf-after--li">dataBinding {  
      enabled = true  
}</pre>

2\. create the layout file for the item:

<pre name="a910" id="a910" class="graf graf--pre graf-after--p"><?**xml version=**"1.0" **encoding=**"utf-8"?>  
<layout **xmlns:android=**"http://schemas.android.com/apk/res/android"  
        **xmlns:tools=**"http://schemas.android.com/tools">  

    <LinearLayout  
        **android:layout_width=**"match_parent"  
        **android:layout_height=**"match_parent"  
        **android:orientation=**"vertical"  
        **android:padding=**"@dimen/activity_horizontal_margin">  

        <TextView **android:id=**"@+id/textViewItem"  
                  **android:layout_width=**"match_parent"  
                  **android:layout_height=**"wrap_content"  
                  **tools:text=**"Recycler Item"/>  

    </LinearLayout>  
</layout></pre>

3\. Create an instance of **RxDataSource** telling it what the dataSet type is:

<pre name="ef82" id="ef82" class="graf graf--pre graf-after--p">RxDataSource<**String**> rxDataSource = new RxDataSource<>(dataSet);</pre>

4\. Compose and then cast-call bindRecyclerView (passing in the RecyclerView and layout) with LayoutBinding. Because of casting, viewHolder can infer the type of binding.

<pre name="680b" id="680b" class="graf graf--pre graf-after--p">rxDataSource  
  .map(String::toLowerCase)  
  .repeat(10)  
  .<**ItemLayoutBinding**>bindRecyclerView(recyclerView,  
                               R.layout.item_layout)  
  .subscribe(viewHolder -> {  
         ItemLayoutBinding b = viewHolder.getViewDataBinding();  
         b.textViewItem.setText(viewHolder.getItem());  
  });</pre>

The output will be…



![](https://cdn-images-1.medium.com/max/1600/1*T10QOX-L1dbfFlr8UCiAOg.png)



Note that calling observeOn(AndroidSchedulers.mainThread()) would be unnecessary here, as you’re already on the mainThread. And when you call it, it causes a delay of about ~20–30 milliseconds in the stream, which would lower your frame rate.

Now for a bit more practical example.

Let’s say you want to dynamically update the dataSet. Let’s say you want to search the dataSet and filter out the results specific results. Here’s how that would be done:

<pre name="516a" id="516a" class="graf graf--pre graf-after--p">RxTextView._afterTextChangeEvents_(searchEditText).subscribe(event -> {  
  **rxDataSource.updateDataSet**(dataSet)   
      .**filter**(s -> s.contains(event.view().getText()))  
      .**updateAdapter**();  
});</pre>

In combination with [RxBindings](https://github.com/JakeWharton/RxBinding) (because RxBindings are awesome), I register for textChange events. And when the event occurs I update the DataSet with the **base dataSet!**

Now this is important because the RxDataSource changes its dataSet instance when I call methods like _filter_, _map_ and so on. So filtering needs to be done on the **original dataSet**, not the changed one. And… bam!



![](https://cdn-images-1.medium.com/max/1600/1*uMxIbKfiEySpqx027Ilh3A.gif)



I did come across some limitations — one being that you can’t change the **type** of dataSet after it has been bound with the data source. So functions like _map_ and _flatmap_ can’t return a different type of dataSet. But I have yet to run into a situation where I needed to be able to change the dataSet at runtime.

#### RxRecyclerAdapter simplifies the situations where you have multiple item types

Now let’s say you wanted multiple Item types in your RecyclerView, for example a header and an item type. Then you would:

1.  Create List of **ViewHolderInfo** specifying all the layouts

<pre name="fb6f" id="fb6f" class="graf graf--pre graf-after--li">List<ViewHolderInfo> vi = new ArrayList<>();  
vi.add(new ViewHolderInfo(**R.layout.item_layout**, **TYPE_ITEM**));   
vi.add(new ViewHolderInfo(**R.layout.item_header_layout**, **TYPE_HEADER**)); </pre>

2\. Create instance of **RxDataSource** like before:

<pre name="5ac4" id="5ac4" class="graf graf--pre graf-after--p">RxDataSource<String> rxDataSource = new RxDataSource<>(dataSet);</pre>

3\. Compose and call bindRecyclerView passing in the **recyclerView**, the **viewHolderInfo** list and implementation of **getItemViewType**:

<pre name="fdda" id="fdda" class="graf graf--pre graf-after--p">rxDataSource  
.bindRecyclerView(recyclerView, viewHolderInfoList,  
    new OnGetItemViewType() {  
      @Override public int getItemViewType(int position) {  
        if (position % 2 == 0) {  
          return TYPE_HEADER; //headers are even positions  
        }  
        return TYPE_ITEM;  
      }  
    }  
  ).subscribe(vH -> {  
    //Check instance type and bind!  
    final ViewDataBinding b = vH.getViewDataBinding();  
    if (b instanceof **ItemLayoutBinding**) {  
      final ItemLayoutBinding iB = (ItemLayoutBinding) b;  
      iB.textViewItem.setText("ITEM: " + vH.getItem());  
    } else if (b instanceof **ItemHeaderLayoutBinding**) {  
      ItemHeaderLayoutBinding hB = (ItemHeaderLayoutBinding) b;  
      hB.textViewHeader.setText("HEADER: " + vH.getItem());  
    }  
  });</pre>

<pre name="364f" id="364f" class="graf graf--pre graf-after--pre">/* and like before, you can do this as well   
   rxDataSource.filter(s -> s.length() > 0)   
              .map(String::toUpperCase)  
              .updateAdapter();  
*/</pre>

Now **recyclerView** would look something like:



![](https://cdn-images-1.medium.com/max/1600/1*bz1gu8r1BtqqOxQ2c0Jo5Q.png)













* * *







### A little about the Implementation

#### PublishSubject

Preface → I utilized [**PublishSubjects**](http://reactivex.io/documentation/subject.html) for the most part, and **generics** to create the adapter.

PublishSubject is a type of observable which can be both _Observable_ and an _Observer_ at the same time.

Because it is an observer, it can subscribe to one or more Observables. And because it is an Observable, it can pass through the items it observes by reemitting them, and it can also emit new items.

#### Internals

Internally, there are two adapters, which you can also access directly if you want: **RxAdapter** and **RxAdapterForTypes**.

For these two, I created a generic **ViewHolder** implementation, which binds the layout with an instance of ViewDataBinding:

<pre name="41fa" id="41fa" class="graf graf--pre graf-after--p">public class SimpleViewHolder<T, V extends ViewDataBinding> extends RecyclerView.ViewHolder {  
    private V mViewDataBinding;  

    public V getViewDataBinding() {  
        return mViewDataBinding;  
    }  

    public T getItem() {  
        return mItem;  
    }  

    private T mItem;  

    protected void setItem(final T item) {  
        mItem = item;  
    }  

    public SimpleViewHolder(final View itemView) {  
        super(itemView);  
        mViewDataBinding = DataBindingUtil._bind_(itemView);  
    }  
}</pre>

Then I created RxAdapter — It takes two generics:

<pre name="8d48" id="8d48" class="graf graf--pre graf-after--p">RxAdapter<_DataType_, _LayoutBinding_ extends ViewDataBinding></pre>

I created a [PublishSubject](http://reactivex.io/RxJava/javadoc/rx/subjects/PublishSubject.html) for my ViewHolder, and in onBindViewHolder I call onNext. The viewHolder contains the item itself:

<pre name="5da4" id="5da4" class="graf graf--pre graf-after--p">@Override  
public void onBindViewHolder(final SimpleViewHolder<T, V> holder, final int position) {  
    holder.setItem(mDataSet.get(position));  
    mPublishSubject.onNext(holder);  
}</pre>

Finally, I created a method asObservable, which returns the publishSubject as an Observable so that you can subscribe to it:

<pre name="552f" id="552f" class="graf graf--pre graf-after--p">public Observable<SimpleViewHolder> asObservable(){  
    return mPublishSubject.asObservable();  
}</pre>

But wait, what about the RxDataSource? Well it’s just a wrapper for Rx Observables. It’s main purpose is to provide you with an abstraction over the two adapters and Rx methods. It basically connects everything together.

When I say it’s a wrapper, that means that you only get methods that are **relevant to a recyclerAdapter**, like _filter_, _map_, _take_, _first_, _repeat_ and so on. It doesn’t give you methods which have something to do with threading or schedulers.

As the class is pretty straight-forward. You can check out the code for RxDataSource [**here**](https://github.com/ahmedrizwan/RxRecyclerAdapter/blob/master/rxrecycler-adapter/src/main/java/com/minimize/android/rxrecycleradapter/RxDataSource.java).

That’s pretty much it… I hope you found this article useful. Do give [RxAdapter](https://github.com/ahmedrizwan/RxRecyclerAdapter) a try. And if you have any questions (or suggestions), fire away!



![](https://cdn-images-1.medium.com/max/1600/1*rgZIWDa7Zr8GJhb5zQiyPA.jpeg)



Happy coding!








