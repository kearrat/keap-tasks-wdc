# Keap Task WDC

A WDC to get tasks from the Keap marketing automation platform.

## How to use
1. [Create a Keap Personal Access Token](https://developer.infusionsoft.com/pat-and-sak/) if you don't already have one.
1. Start a new WDC connection in Tableau Desktop 2019.4 or higher and enter: `https://keap-tasks-wdc.glitch.me/`
1. Enter your Keap Personal Access Token.
1. Click Get Data!

## How to refresh

##### Tableau Server

If you want to use this WDC on your Tableau Server you will first need to [add it to your safelist](https://help.tableau.com/current/server/en-us/datasource_wdc.htm) with the following commands:

```
tsm data-access web-data-connectors add --name "Keap Task WDC" --url https://keap-tasks-wdc.glitch.me:443
tsm pending-changes apply
```

Note that this will require your Tableau Server to restart!

##### Tableau Online

If you want to use this WDC on Tableau Online you will need to set it up using [Tableau Bridge](https://help.tableau.com/current/online/en-us/qs_refresh_local_data.htm)


_Not associated with [Keap](https://keap.com/)_
