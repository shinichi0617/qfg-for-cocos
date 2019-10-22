import TitleUIController from './UI/TitleUIController';

const {ccclass, property} = cc._decorator;

@ccclass
export default class TitleScene extends cc.Component {

    @property({ type: TitleUIController, visible: true })
    private _uiController: TitleUIController = undefined;
    get uiController() { return this._uiController!; }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}
