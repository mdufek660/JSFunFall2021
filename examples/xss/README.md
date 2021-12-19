# Cross-Site Scripting (XSS) Vulnerability Example

This is an example of code that is vulnerable to a [Cross-Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/) attack.

Open _examples\xss\xss.html_ inside of Chrome, Firefox, Safari, Edge or another web browser. To replicate a XSS vulnerability, enter code within `<script></script>` tags and click on the buttons below.

Here is an example of code that code be used within a client-side XSS attack.

```
<img src="1" onerror="alert('Bad code');">
```

```
<img src="1" onerror="alert(document.querySelector('#password').value)">
```
