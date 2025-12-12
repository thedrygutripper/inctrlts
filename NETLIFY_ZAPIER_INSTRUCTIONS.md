Netlify Forms + Zapier

1) Netlify form (in HTML) must include: <form name="contact" method="POST" data-netlify="true"> and a hidden input
   <input type="hidden" name="form-name" value="contact" />

2) To forward Netlify form submissions to Zapier, create a Zap that catches Netlify notifications or use a webhook action.

3) Alternatively, set the form action to post to a Zapier webhook directly:
   <form action="https://hooks.zapier.com/hooks/catch/XXX/YYY" method="POST"> ... </form>
