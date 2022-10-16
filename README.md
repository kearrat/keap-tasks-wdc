# Keap Tasks WDC

A WDC to get tasks from the Keap marketing automation platform.

## How to deploy

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/KeshiaRose/keap-tasks-wdc)

## How to use

1. [Create a Keap Personal Access Token](https://developer.infusionsoft.com/pat-and-sak/) (PAT) if you don't already have one.
1. Start a [new WDC connection](https://tableau.github.io/webdataconnector/docs/wdc_use_in_tableau.html) in Tableau Desktop 2019.4 or higher and enter your personal netlify URL. For example: `https://keap-tasks-wdc.netlify.app/`
1. Enter your Keap PAT.
1. Click Get Data!

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
