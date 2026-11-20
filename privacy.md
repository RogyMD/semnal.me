---
title: Privacy Policy
description: What happens to your information when you use Semnal on iPhone.
permalink: /privacy
---

# Semnal Privacy Policy

**Last updated: 16 November 2026**

Semnal is made by AI Garden, which is me, one developer. This page explains what happens to your information when you use Semnal on iPhone. If anything here is unclear, write to me at [semnal@aigarden.uk](mailto:semnal@aigarden.uk).

## The short version

- Your signals, settings, history and recordings stay on your iPhone. Recordings never go to my server.
- Semnal has no sign-up. I never ask for your email address, phone number or a password. The app makes an anonymous account for you, which is a random ID.
- If you choose people to alert, an alarm goes to them through a server I run on Google Firebase in London. It carries your display name, your message and, only if the signal has **Insert location** on, where you are. The server deletes alarms after 7 days.
- Semnal has no ads, no analytics tools, no crash-reporting tools and no purchases, and I don't sell your data.

## What stays on your iPhone

- **Your signals:** their names, sounds, spoken text, messages and switches.
- **Your settings:** display name, emergency number, stop gesture and triggers.
- **Your history:** past alarms, tests and cancelled countdowns.
- **Your recordings.** Full-size videos are saved to the app's own album in your Photos. The app keeps a small copy with the place and time stamped on it, and sound recordings, in its History. The app only adds videos to Photos. It doesn't read your other photos. Nothing you record leaves your iPhone unless you share it yourself.
- **A list of your signals' names,** in a container that only Semnal and its Lock Screen and Control Center control can read.

The camera, microphone, torch and motion sensors are used on the iPhone only. Face ID, Touch ID and your passcode are checked by iOS. Semnal learns only whether the check passed.

## iCloud and other Apple services

- **iCloud.** If your iPhone is signed in to iCloud, your signals and settings are also kept in your own iCloud account, so your other devices have the same ones. This includes your display name, emergency number and stop gesture. History and recordings are not synced. Apple gives me no access to this storage.
- **iCloud Keychain.** Your account key (see below) is saved in your Keychain. If iCloud Keychain is on, Apple syncs it to your other devices.
- **Address lookup.** When an alarm records video or shares your location, and you've allowed location access, your iPhone sends its coordinates to Apple to get a street address. Apple's privacy policy covers this.
- **Siri and Shortcuts.** When you start an alarm with Siri or a shortcut, Apple's system and Semnal pass the signal's name between them. I don't receive it.
- **Apple's reports.** If you've chosen to share analytics with app developers in your device settings, Apple may send me crash reports and usage statistics for Semnal. They reach me without your name or contact details.

Apple stores and protects this data under its [iCloud terms](https://www.apple.com/legal/internet-services/icloud/) and [privacy policy](https://www.apple.com/legal/privacy/).

## Your anonymous account

When Semnal starts, it makes an anonymous account on my server: a random ID with no name, email address or password. The account is how the server knows which alarms are yours and who may read them.

Your **account key** is your login. You find it in **Settings → People to alert → Account key**. The server keeps only a scrambled form of the key, never the key itself. Anyone who has your key can receive the alarms sent to you, so keep it like a password.

## Alerting people: what goes to my server

The server runs on Google Firebase, in Google's London region. It's used only for telling people about an alarm. Google stores the data for me under the [Firebase privacy terms](https://firebase.google.com/support/privacy).

**What I keep until you ask me to delete it:**

- Your anonymous account ID.
- Your display name, once you set one.
- A push token for each of your iPhones, so notifications can reach it. It's stored under an ID that Apple gives the app for your device.
- The scrambled form of your account key.
- Who alerts whom: for each link, both display names and whether alerts are switched on, off or paused.
- If you type a wrong account key, a count of wrong tries for your device. After 5 wrong tries the server refuses that device for 15 minutes. The count is removed when a right key is entered.

**What the server deletes by itself:**

- **An invitation** (the QR code): its code and your display name, for 10 minutes.
- **An alarm,** for 7 days: your display name, the signal's name, your message, your battery level, whether it's a test, when it started and ended, and whether you confirmed you're safe.
- **Your location,** for 7 days, and only if the signal has **Insert location** on and you've allowed location access: coordinates, accuracy, street address, and the path your iPhone took while the alarm ran.
- **Updates about the alarm,** for 7 days: for example that your iPhone moved, or that the alarm ended.
- **Delivery records,** for 7 days: for each person, whether the alert was sent, failed, was delivered, was opened, and whether they checked in.

While an alarm runs, your iPhone reports to the server every 30 seconds, also with the screen off.

**Who can see an alarm:** you, and the people that alarm went to. The people you alert don't see each other. You can see that a person opened your alarm. I can see what's on the server, because I run it. I look only when I need to fix a problem or to delete data you asked me to delete.

**If someone alerts you,** the server holds the same account details for you, and records that their alarm was delivered to you, that you opened it, and whether you checked in.

## Notifications

Alerts reach people as push notifications. The notification's text passes through Google's Firebase Cloud Messaging and Apple's push service on its way: your display name, your message and, if you share your location, the street address. When a notification arrives, the receiving iPhone tells my server so, using a one-time code.

## What reaches me

- **What's on the server,** as described above.
- **Emails you send me.** When you tap a feedback link in Settings, Semnal opens an email to me. It adds the app's version and build at the bottom. You can read or delete that line before you send. I use your email only to reply, and I keep it only as long as I need to.
- **Apple's reports,** if you share them, as described above.

I don't share any of this with anyone else, and I don't sell it.

## Deleting your data

- **Remove a person** in **Settings → People to alert**. The link is deleted, and that person can no longer see your alarms, old ones included.
- **Alarms** are deleted from the server 7 days after they start, with their location, updates and delivery records.
- **Deleting the app** removes the signals, settings, history and recordings it stored on that iPhone. It doesn't remove videos in your Photos, the copy of your signals and settings in iCloud, or your record on my server.
- **The iCloud copy:** on iPhone, open **Settings**, tap your name, then **iCloud**, open the storage list, choose the app and delete its data.
- **Your record on my server:** email me at [semnal@aigarden.uk](mailto:semnal@aigarden.uk) and I'll delete your account, display name, push tokens, links and key record by hand. Your account is anonymous, so I can't find it from your email address. Send me your account key from **Settings → People to alert → Account key**, and I'll use it to find your record. The key stops working once the account is deleted. If you have no key, send me your display name and the name of one person you alert.
- **Emails:** ask me and I'll delete our conversation.

Wherever you live, you can ask me what I hold about you, or ask me to correct or delete it, at semnal@aigarden.uk.

## Children

Semnal isn't made specifically for children, and I don't knowingly collect personal information from anyone under 13. If you believe a child has used Semnal to alert people, or has emailed me, tell me and I'll delete their data.

## Changes to this policy

If Semnal starts handling your data differently, I'll update this page and the date at the top before the change reaches the App Store.

## Contact

AI Garden<br>
Email: [semnal@aigarden.uk](mailto:semnal@aigarden.uk)
