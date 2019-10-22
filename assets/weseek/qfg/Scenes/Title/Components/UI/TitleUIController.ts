const {ccclass, property} = cc._decorator;

@ccclass
export default class TitleUIController extends cc.Component {

    @property({ type: cc.AudioClip, visible: true })
    private _okSE: cc.AudioClip = undefined;
    get okSE() { return this._okSE!; }

    @property({ type: cc.Button, visible: true })
    private _startButton: cc.Button = undefined;
    get startButton() { return this._startButton!; }

    start () {
        // add click hander startButton
        this.startButton.node.on('click', () => {
            // seを鳴らす
            cc.audioEngine.play(this.okSE, false, 1);
            // TODO 画面遷移
        }, this);
    }
}
