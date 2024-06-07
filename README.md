# Foundry VTT - World Macros

A simple module that allows you to automatically execute macros when the game is ready.

## Documentation

In order for a macro to be automatically executed you need to create a folder in the Macros Directory called `World Macros`. Anything macro in that folder, including subfolders, will be executed automatically when the `ready` hook is called.

It is also worth noting that this module will run for any user that connects which includes players. However, if the macro itself can't be executed by a particular person it will not attempt to execute it for them. So if you want a macro to execute automatically for your players they will atleast need `Limited` access.