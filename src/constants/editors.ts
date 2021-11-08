export const NO_EDITOR = -1;
// export const TEXT_EDITOR = 2;
// export const SCRIPT_EDITOR = 3;
export const PREVIEW_TEXT_EDITOR = 2;
export const FULL_TEXT_EDITOR = 3;
export const SCRIPT_EDITOR = 4;
export const TITLE_EDITOR = 5;
export const NAME_EDITOR = 6;

export const editorTitleMap: {[key: number]: string} = {};
editorTitleMap[2] = "Edit Preview Text";
editorTitleMap[3] = "Edit Full Text";
editorTitleMap[4] = "Edit Script";
editorTitleMap[5] = "Edit Card Title";
editorTitleMap[6] = "Edit Subject Name";

export const editorBlueprintjsIconMap: {[key: number]: string} = {};
editorBlueprintjsIconMap[2] = "new-text-box";
editorBlueprintjsIconMap[3] = "new-text-box";
editorBlueprintjsIconMap[4] = "code-block";
editorBlueprintjsIconMap[5] = "label";
editorBlueprintjsIconMap[6] = "person";




