import { ShiyiComponentBase } from "../ComponentsBase"


class ComponentSample extends ShiyiComponentBase {
    methods = {
        fn: () => {
            this.setData({})
        }
    }
}

Component(new ComponentSample())