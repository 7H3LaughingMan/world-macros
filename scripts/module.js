function executeMacros(folder) {
    for (const macro of folder.contents) {
        try {
            if (macro.canExecute) {
                macro.execute();
                console.debug(`World Macros | Executed "${macro.name}" (ID: ${macro.id})`);
            }
        } catch (err) {
            console.error(`World Macros | Error Executing "${macro.name}" (ID: ${macro.id})`, err);
        }
    }

    for (const subfolder of folder.getSubfolders()) {
        executeMacros(subfolder);
    }
}

Hooks.once("ready", () => {
    const folder = game.macros.folders.find(f => f.name == "World Macros" && f.depth == 1);
    if (typeof folder !== "undefined") {
        executeMacros(folder);
    }
});