# Form Integration (2-Minute Setup)

By default, Zenith's waitlist form in `index.html` submits to `success.html` so the flow is complete out of the box.

To make the form send real emails, use one of these options.

## Option 1: Formspree (Fastest)

1. Create a free endpoint at Formspree.
2. In `index.html`, find the form in the `#waitlist` section.
3. Update the form tag:

```html
<form class="zenith-form" action="https://formspree.io/f/your-id" method="POST">
```

4. Add a redirect field if needed:

```html
<input type="hidden" name="_next" value="https://yourdomain.com/success.html" />
```

## Option 2: Netlify Forms

1. Host the site on Netlify.
2. Update the form tag:

```html
<form
  class="zenith-form"
  name="zenith-waitlist"
  method="POST"
  data-netlify="true"
  action="success.html"
>
```

3. Add this hidden input inside the form:

```html
<input type="hidden" name="form-name" value="zenith-waitlist" />
```

## Why this matters

Beginners often abandon templates when forms do not work. Zenith includes this guide so buyers can move from design to lead capture quickly.
