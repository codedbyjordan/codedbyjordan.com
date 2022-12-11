---
title: "Creating a Typing Effect with Tailwind"
description: In this tutorial, I teach you how to create a typing effect using Tailwind CSS
date: 08-04-2022
headerImg: /keyboard.jpg
layout: ../../layouts/PostLayout.astro
---

You may have seen a website use a cool typing effect and think to yourself, "Wow, that must take a ton of fancy JavaScript to accomplish!"

Quite the opposite, my friend! In this tutorial, I'll show you how to easily create it using Tailwind.

This tutorial won't go over how to setup Tailwind itself, you can read how to do that [on the Tailwind docs](https://tailwindcss.com/docs/guides/vite).

## The HTML

The HTML is really simple, we're using an `<h1>` in this tutorial, but you can use whatever suites your needs.

```html
<!-- the first three classes are required, the rest are just to make the text look nicer -->
<h1 class="overflow-hidden whitespace-nowrap font-mono text-xl font-bold">
  Hello, world.
</h1>
```

The animation we'll be making adjusts the width of the element, so we need `overflow-hidden` to make sure the text doesn't spill out of the container, and we need `whitespace-nowrap` so that the text doesn't wrap when the container is too small to fit it all on one line. As for the font, you can use any monospace font. You'll see why we need the font to be monospace in a moment.

## The Keyframes

Next, we need to create the animation. Open up your Tailwind config file and under the `extend` property, add two properties, `animation`, and `keyframes`. Your config file should look something like this.

```js
module.exports = {
  content: [],
  theme: {
    extend: {
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
```

Under the `keyframes` property, we need to add a new key with the name of whatever we want our animation to be called. I'll call it 'typing', but you can name it whatever you want. All this animation does is make the element it's applied to go from a width of zero to a width of however big the text inside it is. We can achieve that by doing this

```js
typing: {
  from: { width: "0" },
  to: { width: "14ch" }
}
```

Now you're probably thinking to yourself, "What the heck is the '14ch' for?" Well, 14 is the length of the string that is being animated (the `Hello, world.` inside of the `<h1>`) plus 1. I add one to it because I found this it makes the animation slightly better, if you do _just_ the length of the string, the characters will be slightly cut off. The `ch` is a unit of measurement in CSS where `1ch` is equal to the width of the `0` in the font that is being used. That's why a monospace font is best, because all characters are of the same width technically `1ch` will be equal to the width of any character.

## The Animation

Finally, we need to create an animation class that uses the keyframes we just created. To do that, create a new key inside of the `animation` property of your Tailwind config. Call it whatever you want, I like to just call it the same thing as the keyframe, so, `typing`. We're going to be using the `steps` timing function, which will play the animation in increments, rather than just a smooth transition. Like the width, we'll set the number of steps equal to the length of the text + 1. Feel free to change the time to whatever.

```
typing: "typing 2s steps(14)"
```

## Using the Animation

To use the animation, we simply need to apply the class to our element.

```html
<h1
  class="overflow-hidden whitespace-nowrap font-mono text-xl font-bold animate-typing"
>
  Hello, world.
</h1>
```

Now, if you view the page, your text should be typing itself!

## Adding a Blinking Cursor

This step is optional, but if you want to create a blinking cursor, we can do that simply by adding another animation, I'll call it `blink`, that makes the right border go from transparent to a solid color. Under the `keyframes` property of your Tailwind config, add the following.

```
blink: {
  from: { "border-right-color": "transparent" },
  to: { "border-right-color": "black" },
},
```

And under the `animation` property we're going to extend our typing animation class by adding our new animation. We'll make the animation have a short duration so the cursor blinks quickly and play infinitely. Your `typing` animation class (or whatever you decided to call it) should now look like this

```
  typing 2s steps(14), blink 0.1s infinite
```

Next, we need to add a right border to our element. To do that, we need to add two classes, `border-r-4` to give it a border with a width of `4px`, and `border-r-black` (replace `black` with whatever color you want) to give the border a color.

## Finishing up

One last thing we need to do is set the width of the element. With the blinking cursor effect, you may notice that once the typing animation ends, the width of the element goes back to whatever it was before the typing animation started. To fix that, let's give the element a width of `13ch`. Change the `13` to be whatever the length of the text being typed is.

## Conclusion

That's it. It's way less complex than you probably thought it would be; I know it was for me.

Thanks for reading. Have any feedback? Send it to me on <a href="https://twitter.com/codedbyjordan" target="_blank" class="underline">Twitter</a>, I would really appreciate it.
