# Keap Tasks WDC

A WDC to get tasks from the Keap marketing automation platform.

## How to set up

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/KeshiaRose/keap-tasks-wdc)

1. Create a [GitHub account](https://github.com/signup), if you don’t have one already.
1. Create a [Netlify account](https://app.netlify.com/signup), if you don’t have one already.
1. Click the green “Deploy on Netlify” button above.
1. In the opened page click “Connect to GitHub” and login with your GitHub account.
   - Optional: Change the name of the project if you want to.
1. Click “Save & Deploy”.
1. Wait a minute or so and refresh the page to make sure your site deployed successfully.
   - Under “Production deploys” you should see: “Production: main@HEAD Published”.
1. Take note of your site’s url (Shown near the top) for example: `https://ephemeral-kringle-4eadba.netlify.app`.
   - If you want to change this URL go to “Site settings” and then click “Change site name” and change it to something more memorable.
1. Start a new WDC connection in Tableau Desktop and enter your new site's URL.
1. Enter your [Keap PAT](https://developer.infusionsoft.com/pat-and-sak/).
1. Click Get Data! 🎉

## How to refresh

### Tableau Desktop

When refreshing the extract in Tableau Desktop you may need to re-enter your Keap PAT. If this is needed a username and password box will pop up. Leave the username blank and enter your PAT as the password.

### Tableau Server

If you want to use this WDC on your Tableau Server you will first need to [add it to your safelist](https://help.tableau.com/current/server/en-us/datasource_wdc.htm). If your WDC was hosted at `https://keap-tasks-wdc.netlify.app/` for example, you would use the following commands:

```
tsm data-access web-data-connectors add --name "Keap Task WDC" --url https://keap-tasks-wdc.netlify.app:443
tsm pending-changes apply
```

Note that this will require your Tableau Server to restart!

Once completed you will be able to refresh the WDC extract like any other extract. Just make sure to embed the password when publishing so it can use your PAT to refresh the data.

### Tableau Online

If you want to use this WDC on Tableau Online you will need to set it up using [Tableau Bridge](https://help.tableau.com/current/online/en-us/qs_refresh_local_data.htm)

_This WDC is not associated with [Keap](https://keap.com/)_
