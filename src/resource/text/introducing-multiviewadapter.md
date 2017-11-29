---
author: Riyaz Ahamed
authorTwitter: https://twitter.com/DevAhamed
authorFacebook: none
title: "Create Android Recyclerview adapters like a boss with MultiViewAdapter"
subTitle: "RecyclerView is an important widget in the Android framework and a large percentage of the Android apps out there use it. It’s a powerful..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*43Kdmm5GaK-E_T29a1Csew.jpeg
url: https://medium.freecodecamp.org/introducing-multiviewadapter-7f77e5758d3f
id: introducing-multiviewadapter-7f77e5758d3f
date: 2017-05-09T18:26:56.460Z
tags: [
  "Android",
  "Android App Development",
  "Tech",
  "Programming",
  "Mobile App Development"
]
---
# Create Android Recyclerview adapters like a boss with MultiViewAdapter



![](https://cdn-images-1.medium.com/max/1600/1*43Kdmm5GaK-E_T29a1Csew.jpeg)

Library for creating composable recyclerview adapters



RecyclerView is an important widget in the Android framework and a large percentage of the Android apps out there use it. It’s a powerful tool that covers many generic use-cases. However, because of this flexibility, there’s a bit of work involved to create an adapter.

The support for multiple viewtypes was one of the advantages of RecyclerView over legacy listview. But displaying multiple viewtypes requires a lot of boilerplate code. It can quickly get out of hand if you have more than three viewtypes. You may have multiple if-else conditions, switch cases, and so on. Unfortunately, there is no easy way to reuse the creation and binding code of viewholders.

MultiViewAdapter is meant to solve this exact problem. There are a number of solutions available already, but such libraries have a few restrictions:

1.  Your data objects should have a common parent, which can interfere with your object modeling.
2.  You are forced to keep layout resource ID inside the model class itself. Again, this breaks dependency hierarchy.
3.  You are allowed to manage the view type ID yourself. Usually layout resource ID is returned as a view type. So you can’t use the same layout file for two different view types.
4.  They don’t take advantage of DiffUtil.
5.  You have to write switch cases, if you want to have different item-decorations/span-size/selection-modes for different view types.

MultiViewAdapter solves all of these requirements. The library was specifically designed in a way that won’t interfere with your object modeling and hierarchy.

### Source code

[**DevAhamed/MultiViewAdapter**  
_MultiViewAdapter - Recyclerview Adapter library to create composable view holders_github.com](https://github.com/DevAhamed/MultiViewAdapter "https://github.com/DevAhamed/MultiViewAdapter")[](https://github.com/DevAhamed/MultiViewAdapter)

Here’s a sneak peek of what you can achieve with the library.



![](https://cdn-images-1.medium.com/max/1600/1*NFAKaiXUb5AXZfwGVFZ2JA.gif)

Multiple view types, custom item decorations for different viewtypes, diffutil etc.,



### Features

1.  No restrictions about how you model your object classes and their hierarchy.
2.  Out of the box support for DiffUtil.
3.  Supports single selection and multi-selection.
4.  Each view type can have its own span count or ItemDecoration, among other things. You don’t need switch cases or if-else conditions.

### How to use it

Add the dependency in your app’s gradle file.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/19e188cdd5a2eeeaa9c4ccb6a1ed3e55?postId=7f77e5758d3f" data-media-id="19e188cdd5a2eeeaa9c4ccb6a1ed3e55" allowfullscreen="" frameborder="0"></iframe>





### Concepts behind MultiViewAdapter



![](https://cdn-images-1.medium.com/max/1600/1*xUtA2hYJeyOcHeqao_ExTA.jpeg)



1.  **RecyclerAdapter** — This is the adapter class. It can have multiple ItemBinder and DataManagers. It extends from official RecyclerView.Adapter
2.  **ItemBinder **— ItemBinder’s responsibility is to create and bind viewholders. ItemBinder has type parameter which accepts the model class that needs to be displayed. ItemBinder needs to be registered inside RecyclerAdapter. ItemBinder can be registered with multiple adapters.
3.  **DataManger **— It holds the data and calls necessary animations when the data-set is modified. There are two DataManagers. **DataListManager** for list of items. **DataItemManager** for a single item (Header, Footer etc.).











* * *







### Creating simple adapters



![](https://cdn-images-1.medium.com/max/1600/1*g4yON409_UBDcl_0uK7lCQ.jpeg)

MultiViewAdapter with list of items



You have a list of objects, let’s say ‘Cars’. If you want to display a list of cars, here is the entire code.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/6ac1e359809f0d481c418717982bf625?postId=7f77e5758d3f" data-media-id="6ac1e359809f0d481c418717982bf625" allowfullscreen="" frameborder="0"></iframe>





Now you are good to go. You can use the adapter, `CarAdapter carAdapter = new CarAdapter();` and set it to recyclerview. That’s it.

You might have noticed that with the traditional approach, we always create a single class `CarAdapter`. But when using the library, you need to create two classes — `CarAdapter` and `CarBinder`. The idea here is you can re-use the `CarBinder` in other adapters as well, say `VehicleAdapter`.

### Using GridLayoutManager



![](https://cdn-images-1.medium.com/max/1600/1*sxgwzTrn7jBYdOuyVER3dg.jpeg)

MultiViewAdapter with grid items



You do not need different adapters when you are displaying a grid of items. You can override the `getSpanSize(int maxSpanCount)` inside your ItemBinder class and return the span count.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/99145c1a0703f5f0de87c6a21a5af17e?postId=7f77e5758d3f" data-media-id="99145c1a0703f5f0de87c6a21a5af17e" allowfullscreen="" frameborder="0"></iframe>





Now get the spansize look up from the adapter and set it to your GridLayoutManager.

### For different span counts



![](https://cdn-images-1.medium.com/max/1600/1*3Fi3p7ZYvvOQqkPt3_mrYA.jpeg)

Supports different span count for each view types



No worries here. By default, each item binder returns 1 as the span count. So if you want different span count other than the default, you can override the getSpanSize method and return the necessary span count.

### Custom Item Decoration



![](https://cdn-images-1.medium.com/max/1600/1*kX-yg-0eZKxyfA6oxQsjkg.jpeg)

Supports custom ItemDecoration for each view type



This is the tricky part. It’s even trickier when you are not using this library. There are three steps for creating item decoration per view type.

1.  Create custom item decoration class extending from ItemDecorator.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/9f7eb7f1e7aa01437d87bf9b7616a6ca?postId=7f77e5758d3f" data-media-id="9f7eb7f1e7aa01437d87bf9b7616a6ca" allowfullscreen="" frameborder="0"></iframe>





2\. When creating ItemBinder, pass the object of custom item decorator through the constructor.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/900f7269aa5f62019cf48e6496e04fa2?postId=7f77e5758d3f" data-media-id="900f7269aa5f62019cf48e6496e04fa2" allowfullscreen="" frameborder="0"></iframe>





3\. Now get the item decoration from the adapter and add it to your recyclerview.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/b30ed0b2c95df2344c0fb581758f1926?postId=7f77e5758d3f" data-media-id="b30ed0b2c95df2344c0fb581758f1926" allowfullscreen="" frameborder="0"></iframe>





So much for the tricky part. Phew.

### DiffUtil and Custom Payload

MultiViewAdapter takes care of DiffUtil by default. If you want to pass the payloads during the diffutil operation, you need to pass the object of PayloadProvider through the constructor. To learn more about diffutil read [here](https://developer.android.com/reference/android/support/v7/util/DiffUtil.html).





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/5e292f348267fa52f55557e2999b8077?postId=7f77e5758d3f" data-media-id="5e292f348267fa52f55557e2999b8077" allowfullscreen="" frameborder="0"></iframe>





### **Making an adapter selectable**



![](https://cdn-images-1.medium.com/max/1600/1*lS_UNTtEceK3qVWvprFdUw.jpeg)

Items can be selected



MultiViewAdapter supports three different selection options:

1.  Single selection — Only one item can be selected. Once an item is selected, it can’t be deselected unless another item is selected.
2.  Single selection or none — Only one item can be selected. An item can be deselected by doing the same selection operation.
3.  Multi-selection — Multiple items can be selected across different DataManagers.

To make an adapter selectable, you need to use “Selectable” counterparts of Adapter, ItemBinder, and ViewHolder. For example, you could use SelectableAdapter, SelectableBinder and SelectableViewHolder.

Let us take the CarAdapter example, and make it selectable.





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/80b3c81a04d9c87f2cc3112fa6dd6c5f?postId=7f77e5758d3f" data-media-id="80b3c81a04d9c87f2cc3112fa6dd6c5f" allowfullscreen="" frameborder="0"></iframe>





Notes :

1.  It is not necessary that all the ItemBinders should be selectable. For example, if you have headers in a list it might not be selectable. So extend HeaderBinder from normal ItemBinder.
2.  You can re-use any selectable binder inside the normal adapter. It won’t be selectable. For an item to be selectable, both the adapter and binder should be extended from their Selectable counterparts.
3.  By default, on a long press an item will be selected. If you want the item to be selected, you can call `itemSelectionToggled()` inside ViewHolder.
4.  You can set or get selected items from the DataListManager using `getSelectedItems()` and `setSelectedItems(List<E> items)`

### Listeners

ViewHolders have two listeners: OnItemClickListener and OnItemLongClickListener.

DataListManager has an ItemSelectionChangedListener and MultiSelectionChangedListener. These listeners can be used with SelectableAdapter.

### **Final notes**

Thank you for reading! I hope this article helps you get started with the MultiViewAdapter library. The library itself is under active development and I have plans for adding some exciting features. You can watch the repository in GitHub to receive notifications. Also, you can take a look at the roadmap for the library at [GitHub](https://github.com/DevAhamed/MultiViewAdapter).

If you have any queries, issues, or feature requests regarding the library, you can reach me via [Twitter](https://twitter.com/DevAhamed).











* * *







To help others please click ❤ to recommend this article and star the [library](https://github.com/DevAhamed/MultiViewAdapter) if you found it helpful.

All code appearing in this article and the library is licensed under [Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0). Written by [Riyaz Ahamed](https://twitter.com/DevAhamed) with ❤ from Bengaluru, India.








