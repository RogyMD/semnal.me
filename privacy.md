---
title: Privacy Policy
description: What happens to your information when you use Semnal on iPhone.
permalink: /privacy
---

# Semnal Privacy Policy

**Last updated: 21 November 2026**

Semnal is made by AI Garden, which is me, one developer. This page explains what happens to your information when you use Semnal on iPhone. If anything here is unclear, write to me at [semnal@aigarden.uk](mailto:semnal@aigarden.uk).

## The short version

- Your signals, settings, history and recordings stay on your iPhone. Recordings go to my server only for a signal that sends them to your people, and the server deletes them after 7 days.
- Semnal has no sign-up. I never ask for your email address or a password, and your phone number never goes to my server. The app makes an anonymous account for you, which is a random ID.
- If you choose people to alert, an alarm goes to them through a server I run on Google Firebase. It carries your display name, your message and, only if the signal has **Insert location** on, where you are. If the signal has **Attach video** or **Attach audio** on, it also carries your recordings. The server deletes alarms and recordings after 7 days.
- An SMS goes from your own iPhone, through Messages, and never passes through my server.
- **Remove All Data** in Settings deletes your account and everything about it on the server and on your iPhone at once. An account nobody uses for a year is deleted the same way.
- Semnal has no ads, no analytics tools, no crash-reporting tools and no purchases, and I don't sell your data.

## What stays on your iPhone

- **Your signals:** their names, sounds, spoken text, messages and switches.
- **Your settings:** display name, phone number, emergency number, stop gesture, triggers, and the numbers in **Settings → SMS**.
- **Your history:** past alarms, tests and cancelled countdowns.
- **Your recordings.** When a signal has **Save to Photos** on, full-size videos are saved to the app's own album in your Photos, with the time and, if you've allowed location access, the place. The app keeps a small copy, with the place and time stamped on it when it knows the place, and sound recordings, in its History. The app only adds videos to Photos. It doesn't read your other photos. A recording leaves your iPhone only when its signal sends recordings to your people (see below), or when you share it yourself.
- **A list of your signals' names,** in a container that only Semnal and its Lock Screen and Control Center control can read.

The camera, microphone, torch and motion sensors are used on the iPhone only. Face ID, Touch ID and your passcode are checked by iOS. Semnal learns only whether the check passed.

When you pick a number from Contacts, iOS's own picker gives the app only the name and number you tap. Semnal has no access to your contacts.

## iCloud and other Apple services

- **iCloud.** If your iPhone is signed in to iCloud, your signals and settings are also kept in your own iCloud account, so your other devices have the same ones. This includes your display name, phone number, emergency number, SMS numbers and stop gesture. History and recordings are not synced. Apple gives me no access to this storage.
- **iCloud Keychain.** Your account key (see below) is saved in your Keychain. If iCloud Keychain is on, Apple syncs it to your other devices.
- **Address lookup.** When an alarm records, shares your location or sends an SMS with your location, and you've allowed location access, your iPhone sends its coordinates to Apple to get a street address. Apple's privacy policy covers this.
- **Siri and Shortcuts.** When you start an alarm with Siri or a shortcut, Apple's system and Semnal pass the signal's name between them. I don't receive it.
- **Apple's reports.** If you've chosen to share analytics with app developers in your device settings, Apple may send me crash reports and usage statistics for Semnal. They reach me without your name or contact details.

Apple stores and protects this data under its [iCloud terms](https://www.apple.com/legal/internet-services/icloud/) and [privacy policy](https://www.apple.com/legal/privacy/).

## Your anonymous account

When Semnal starts, it makes an anonymous account on my server: a random ID with no name, email address or password. The account is how the server knows which alarms are yours and who may read them.

Your **account key** is your login. You find it in **Settings → Push Notification → Account key**. The server keeps only a scrambled form of the key, never the key itself. Anyone who has your key can receive the alarms sent to you, so keep it like a password.

**An account not used for a year is deleted,** with everything the server keeps for it, as with **Remove All Data** (see "Deleting your data"). The server checks once a day. Use means any of these: Semnal comes to the front on your iPhone, the app asks the server for something (for example pairing with someone, or your account key), you start an alarm, or an alert reaches your iPhone. Being in someone's list is not use. If you open Semnal after your account was deleted, it starts a new, empty one.

## Your QR code

**Settings → My QR code** shows a code that another person scans to pair with you. It can carry:

- a short-lived invitation from my server, so that person can alert you with push notifications;
- your phone number, so that person can add you to their SMS numbers;
- your display name.

Your iPhone puts your phone number into the code by itself. It goes only to the person who scans the code, never to my server.

## Alerting people: what goes to my server

The server runs on Google Firebase, in Google's London region. Recordings are kept in Firebase Storage, in the same Firebase project. It's used only for telling people about an alarm and passing them its recordings. Google stores the data for me under the [Firebase privacy terms](https://firebase.google.com/support/privacy).

**What I keep until you delete it, or until your account has gone a year without use:**

- Your anonymous account ID, and when it was last in use.
- Your display name, once you set one.
- A push token for each of your iPhones, so notifications can reach it, and whether critical alerts are allowed on that iPhone. It's stored under an ID that Apple gives the app for your device.
- The scrambled form of your account key.
- Who alerts whom: for each link, both display names, when it was made and how (a QR code, or alerting someone back), whether alerts are switched on, off or paused, and whether one of you asked the other to alert them too.
- If someone switches your alerts off and then removes you, a note that they had, so adding each other again keeps your alerts off for them.
- A count of what your account keeps on the server: how much video and how much sound, how many files, and when this was last counted.
- If you type a wrong account key, a count of wrong tries for your account. After 5 wrong tries the server refuses it for 15 minutes. The count is removed when a right key is entered.

**What the server deletes by itself:**

- **An invitation** (the QR code): its code and your display name, for 10 minutes.
- **An alarm,** for 7 days: your display name, the signal's name, your message, your battery level, whether it's a test, how often your people are reminded, whether it shares your location and sends recordings, which of your people it's for if the signal chose them, when it started and ended, and whether you confirmed you're safe.
- **Your location,** for 7 days, and only if the signal has **Insert location** on and you've allowed location access: coordinates, accuracy, street address, the path your iPhone took while the alarm ran, and where each recording started.
- **Updates about the alarm,** for 7 days: for example that your iPhone moved, or that the alarm ended.
- **Delivery records,** for 7 days: for each person, whether the alert was sent, failed, was delivered, was opened, and whether they checked in.
- **Recordings,** for 7 days. See the next section.
- **A list of your recording files,** to count your storage: each file's name, size, whether it's video, and its alarm. Each entry goes a day after its alarm does.

While an alarm runs, your iPhone reports to the server every 30 seconds, also with the screen off.

**Who can see an alarm:** you, and the people that alarm went to. The people you alert don't see each other. You can see that a person opened your alarm. I can see what's on the server, because I run it. I look only when I need to fix a problem or to delete data you asked me to delete.

**If someone alerts you,** the server holds the same account details for you, and records that their alarm was delivered to you, that you opened it, and whether you checked in.

## Recordings sent to your people

A signal sends its recordings only when it has **Critical Notification** on and **Attach video** or **Attach audio** on. Then:

- **What goes:** the small copy of each video, with or without its sound, or the sound alone. Full-size videos stay on your iPhone. If the signal has **Insert location** off, the copy that goes has no place stamped on its picture and no place sent with it.
- **When:** while the alarm runs, and afterwards if your iPhone was offline: a recording that waited for the internet can still go up for a day after the alarm ended.
- **How much:** one limit per account, 500 MB for video and sound together, and no more than 2000 files. When video no longer fits, the sound of a video still goes. When nothing fits, recordings stay on your iPhone. You see what you use in **Settings → Cloud storage**.
- **Who can see them:** you, and the people that alarm went to, as with the alarm itself. A person you remove loses access at once. Their iPhone fetches the recordings into the app, and they can save them to their Photos or share them. Copies they save or share stay with them. Anyone who sees the alarm can hide a recording for everyone who sees it, and their display name is shown with it. Anyone can show it again.
- **Deletion:** the server deletes recordings with their alarm, 7 days after it started. You can delete them sooner: **Settings → Cloud storage**, choose recordings under **Shared**, then **Delete**. The people you alerted then lose them too, except copies they saved or shared. The recording on your iPhone stays.

## SMS

If a signal has **SMS** on, Messages opens with your numbers and the text filled in, and you press Send. The text has your message and when the signal started and, if the signal has **Insert location** on, your street address and an Apple Maps link to where you are. It goes from your iPhone through your phone network, like any SMS you send. Nothing of it goes to my server.

**Critical SMS** is an extra you switch on yourself in **Settings → SMS**. Where iOS allows it for Semnal and for the numbers you allowed, the app sends the same text by itself while it isn't on screen, through Apple's Critical Messaging, up to the number of times you set for each number. This also goes from your iPhone, not through my server.

When you confirm you're safe, Messages can open with a text that you're safe, for the numbers that got the alarm's SMS.

## Notifications

Alerts reach people as push notifications. The notification's text passes through Google's Firebase Cloud Messaging and Apple's push service on its way: your display name, your message and, if you share your location, the street address. If the signal repeats its alert, people get reminders while the alarm runs, which can say how many recordings it has, or for how long there's been no contact with your iPhone. When a notification arrives, the receiving iPhone tells my server so, using a one-time code.

Alerts are time-sensitive notifications: they come through a Focus, but don't sound on a silenced iPhone. Semnal can't use critical alerts yet. Once Apple allows them, an alert sounds on a silenced iPhone only where its owner has allowed critical alerts. A test is a plain, silent notification.

Plain notifications with your display name also go out when you confirm you're safe (to the people your last alarm alerted), when you ask someone to alert you too, when you switch off or stop getting someone's alerts (to that person), and when your account is deleted, by **Remove All Data** or after a year without use (to the people who alert you).

## What reaches me

- **What's on the server,** as described above.
- **Emails you send me.** When you tap a feedback link in Settings, Semnal opens an email to me. It adds the app's version and build at the bottom. You can read or delete that line before you send. I use your email only to reply, and I keep it only as long as I need to.
- **Apple's reports,** if you share them, as described above.

I don't share any of this with anyone else, and I don't sell it.

## Deleting your data

- **Remove All Data** in **Settings** deletes everything at once, after you confirm. It can't be undone, and it can't be used while a signal runs.
  - **On the server:** your account, display name, push tokens, account key record, storage count, your alarms with their location, updates, delivery records and recordings, and every link, both the people you alert and the people who alert you. If the connection drops halfway, the server finishes the rest that night.
  - **On your iPhone:** your signals, settings, History and recordings, the recordings fetched from other people's alarms, and your account key. Your signals and settings go back to how they were when you first opened the app, and that fresh start also replaces the copy in your iCloud, so your other devices on the same iCloud account are reset too.
  - **Who is told:** the people who alert you get a notification that you left. The people you alert are not notified; you simply leave their list.
  - **What stays:** videos you saved to Photos, and copies of your recordings that other people saved or shared. If you hid a recording in someone else's alarm, your display name stays on it until that alarm is deleted, at most 7 days after it started.
- **Remove a person** in **Settings → Push Notification**. The link is deleted, and that person can no longer see your alarms or recordings, old ones included.
- **Alarms** are deleted from the server 7 days after they start, with their location, updates, delivery records and recordings.
- **Recordings** on the server can be deleted sooner in **Settings → Cloud storage**.
- **Deleting the app** removes the signals, settings, history and recordings it stored on that iPhone. It doesn't remove videos in your Photos, the copy of your signals and settings in iCloud, or your record on my server. Use **Remove All Data** first if you want those gone too. Otherwise recordings on the server still go after 7 days, and the rest a year after your account was last in use.
- **The iCloud copy:** on iPhone, open **Settings**, tap your name, then **iCloud**, open the storage list, choose the app and delete its data.
- **Your record on my server, if you can't use the app:** email me at [semnal@aigarden.uk](mailto:semnal@aigarden.uk) and I'll delete your account, display name, push tokens, links, storage count and key record by hand. Your account is anonymous, so I can't find it from your email address. Send me your account key from **Settings → Push Notification → Account key**, and I'll use it to find your record. The key stops working once the account is deleted. If you have no key, send me your display name and the name of one person you alert.
- **Emails:** ask me and I'll delete our conversation.

Wherever you live, you can ask me what I hold about you, or ask me to correct or delete it, at semnal@aigarden.uk.

## Children

Semnal isn't made specifically for children, and I don't knowingly collect personal information from anyone under 13. If you believe a child has used Semnal to alert people, or has emailed me, tell me and I'll delete their data.

## Changes to this policy

If Semnal starts handling your data differently, I'll update this page and the date at the top before the change reaches the App Store.

## Contact

AI Garden<br>
Email: [semnal@aigarden.uk](mailto:semnal@aigarden.uk)
