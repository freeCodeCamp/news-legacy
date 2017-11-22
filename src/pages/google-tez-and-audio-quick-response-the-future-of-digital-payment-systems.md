---
author: Vaidic Joshi
authorTwitter: https://twitter.com/VaidicJoshi
authorFacebook: https://facebook.com/1215855375101686
title: "The future of digital payment systems — Google Tez and Audio Quick Response"
subTitle: "Google recently marked its entry into the Indian digital payments market by introducing the payment app Tez (Hindi for fast). Since the d..."
coverSrc: https://cdn-images-1.medium.com/max/1600/1*SRMpLrweLP-mrzjgEl4FYg.jpeg
url: https://medium.freecodecamp.org/google-tez-and-audio-quick-response-the-future-of-digital-payment-systems-9ae3485c7128
id: google-tez-and-audio-quick-response-the-future-of-digital-payment-systems-9ae3485c7128
date: 2017-09-25T02:36:15.100Z
tags: [
  "Google",
  "Startup",
  "Tech",
  "Technology",
  "Entrepreneurship"
]
---
# The future of digital payment systems — Google Tez and Audio Quick Response

Google recently marked its entry into the Indian digital payments market by introducing the payment app [**Tez**](https://en.wikipedia.org/wiki/Google_Tez) (Hindi for fast). Since the demonetization of the Indian currency last year, India has seen a tremendous increase in the number of digital payment apps and solutions.

Almost every bank, e-commerce company, and all major telecom providers have one or more apps that support digital payments and digital wallets.

So what makes [Google Tez](https://en.wikipedia.org/wiki/Google_Tez) different?

This is where Google Tez’s **AQR-**based solutionsounds promising. Users can securely exchange account information using audio to initiate a transaction. And the transaction **can be done with a device that has just a microphone and speaker.**



![](https://cdn-images-1.medium.com/max/1600/1*SRMpLrweLP-mrzjgEl4FYg.jpeg)



Existingdigital payment systems use one or more of the following technologies to exchange account information when making transactions.

*   **QR** (**Q**uick **R**esponse) codes
*   **UPI** ( [**U**nified **P**ayments **I**nterface](http://www.npci.org.in/UPI_Background.aspx) )
*   **NFC** ( **N**ear **F**ield **C**ommunication )

This is where Google Tez uses a new alternative, audio-based QR codes (**AQR**).

To understand this, let’s look at the limitations of these digital payment solutions.

**NFC-**based solutions **require special hardware** that supports near-field communications. Thus users with a basic handset can not use it.

**UPI-**based solutions are a hit. However, the pain point lies in the lengthy setup process. Also the UPI is **closely tied to the underlying bank** that holds your account, so you might end up having one UPI address per account. Apart from this, users need to type their UPI every time a transaction is made (which for people, like me, are too lazy to do 😄).

**QR-**based solutions are the most popular, and seemingly the easiest way to initiate a transaction. All one needs to do is scan a QR code. However, again, QR code-based solutions require **devices with cameras** and are vulnerable to “**attagging” attacks**.

👉This is where Google Tez’s **AQR** sounds promising. Audio is used to start the transaction. Its best selling part is that transactions can be completed with a simple device that has just a microphone and speaker — and isn’t that what phones used to be a decade ago?

Yes and no. There are audio-based data exchange apps and solutions. Here are two:

*   [Chirp](https://www.chirp.io/), which provides data over sound solutions
*   [Shuttl](https://vimeo.com/181485272) app, which provides audio boarding passes and is based on Chirp

In fact, we have an audio-based payment solution by [ToneTag](http://tonetag.com/). [Infosys](https://www.infosys.com/) has recently announced its partnership with ToneTag for audio-based digital solutions. (Another reason to believe audio-based payment solutions is the future. 😜)

Using audio to generate QR codes appears to be new. (I have not yet come across an existing solution. Please correct me if I am mistaken.😐)



![](https://cdn-images-1.medium.com/max/1600/1*IHp-N8YYNgKvhvrxpqY1RQ.png)

AQR-based device pairing



**AQR** allows two nearby devices to pair up by using sound. Google Tez uses AQR for cash mode payment transfers.

The app uses **ultrasound** audio to pair up the devices. A random audio is recorded, shuffled, encrypted, and then transmitted in short bursts using the device’s speakers. The other device captures these audio bursts by using its microphone, and then decrypting the audio to get the required data for pairing.

AQR is supposed to be more secure than the QR codes. Also, Google uses its network to detect fraudulent activities.

At the time of the writing of this article, there is no official documentation about how AQRs are created, encrypted, and decrypted. Let’s take a look at how ToneTag uses audio to complete secure payment transactions. ToneTag’s audio-based payment solution uses the following methods to ensure secure audio-based payments:

The device first exchanges dynamic audio data to perform an audio-based handshake. This is called **tokenization.**Once the handshake is successful, the data is encoded into sound waves, which can then be transferred over a phone’s speakers. The data is encrypted and has an error-detection mechanism built into it. This encrypted data is then exchanged and allows devices to pair with each other. In order to complete the transaction, [one-time password](https://en.wikipedia.org/wiki/One-time_password) (OTP) and pin-based authentication are further required.

With Google Tez and Infosys partnering with ToneTag, it seems we have entered into a new era of audio-based digital payments.

Since the Google Tez app uses ultrasound frequency for AQR, the app might not work with phones that do not have ultrasound speakers or microphones. The app claims to support all smartphones.











* * *







**Originally published at** [**vedify.in**](https://vedify.in/is-audio-the-future-of-digital-payment-systems-google-tez-and-aqr-audio-qr-63cf3c0aaaa7) **on September 25, 2017.**








