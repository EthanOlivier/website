const vsCode = aquireVsCodeApi();
function openMancala()
{
    vsCode.postMessage(
        command: 'openProject',
        projectPath: 'C:/Users/Ethan/Desktop/Website/Mancala Backup/Mancala.sln'
    );
}