# **setup/lottie**

**Please note:** before running any code from this branch, be sure to run `npm install`.

This repository has been created in order to show how the npm module **react-lottie** works via a few examples which demonstrate animation playback features such as:

- Capturing events within individual animations
- Playback direction
- Playback speed
- Play / pause

## What is Lottie?

Lottie is an NPM script provided by AirBnb. It renders animations, exported from After Effects into JSON files. Because animations are then handled programmatically, there are a anumber of features available to Developers, allowing the animations to be customized to a good level of detail.

Lottie is made available by AirBnB in a number of different formats. However, within this project, the npm **react-lottie** script is used. It can be downloaded from here: https://www.npmjs.com/package/react-lottie

## Exporting from After Effects

In order to export animations from After Effects, a specific plugin called **Bodymovin** is required.

## What does this code repository contain?

### An interactive React SPA demo site

A Single Page Application with client-side routing is included, comprising of 3 separate routes, each of which demonstrates a different animation.

- **Animation 1**

    > The first page shows an animation of Dinosaurs. This animation (along with the other 2 used within this project) were downloaded from Lottiefiles (https://lottiefiles.com/featured), an online repository of freely available After Effects animations which have been exported using the Bodymovin plugin. This animation is a relatively short animation sequence which is set to loop indefinitely.

<p align="center">
  <img src="http://www.martinburford.co.uk/githubimages/setup-lottie/animation-01.png" width="800">
</p>

- **Animation 2**

    > The second page shows an illustration of a person on a motorbike. This is again an infinitely looping animation, albeit with a single cycle being quite a bit longer in duration than Animation 1.

- **Animation 3**

    > The third page shows an illustration of a fingerprint sensor. This is a non-looping animation, and so will only ever run one.

### Custom user interaction

Within each of the 3 screens mentioned above, there is a table comprising of a number of buttons. Each of these buttons performs an action against the animation visible at that time. Lottie offers a huge array of features that can be updated in real-time. The actions available in this project represent only a tiny portion of what's available:


| Effect        | Setting               |
| ------------- | --------------------- |
| Direction     | Forward / Backwards   |
| Speed         | Slo-mo                |
| Speed         | 1x                    |
| Speed         | 2x                    |
| Speed         | 3x                    |
| Dimensions    | 400px x 400px         |
| Dimensions    | 600px x 600px         |
| Dimensions    | 800px x 800px         |
| Dimensions    | Responsive            |
| Play / Pause  | Play / Pause          |

### Custom events

Lottie offers the ability to setup event listeners for when certain events occur within an animation. For example, it's possible to know when a looping animation sequence completes a single loop before starting another. Similarly, it's possible to be notified (and programmatically react) to when a non-looping animation has completed. Below is a comprehensive list of which events are available via Lottie:

- config_ready (when initial config is done)
- **complete**
- data_failed (when part of the animation can not be loaded)
- data_ready (when all parts of the animation have been loaded)
- destroy
- DOMLoaded (when elements have been added to the DOM)
- enterFrame
- loaded_images (when all image loads have either succeeded or errored)
- **loopComplete**
- segmentStart

## Rendering an animation using Lottie

This project includes a secondary wrapper component for Lottie, written specifically for this project, which allows a few additional features to be added to the UI, for the sake of demonstration. For example, custom controls are added, to allow the user to change the direction and speed of the animation amongst other things.

As can be seen in the code sample below, Lottie requires a JSON file as input. This file would be that which is exported from After Effects using the Bodymovin plugin.

Also shown in the below code block are 2 separate event listeners (**complete** and **loopComplete**), called when a looping animation completes a sequence along with a non-looping animation reaching its final frame.

```javascript
<Lottie
    eventListeners={[{
      eventName: 'complete',
      callback: () => console.log('Entire animation complete')
    },{
        eventName: 'loopComplete',
        callback: () => console.log('Loop complete')
    }]}
    direction={1}
    height={400}
    isPaused={false}
    isStopped={false}
    options={{
        animationOptions: {
            animationData: require('file.json'),
            autoplay: true,
            loop: true,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            }
        }
    }}
    speed={1}
    width={400}
/>
```