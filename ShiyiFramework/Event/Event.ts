import { Router } from "../Router/Router";

export class Event {
    public EventName:string;
    public EventData:Record<string,any>;
    public Stop:boolean = false;
    constructor(EventName:string, EventData:Record<string,any>){
        this.EventName = EventName;
        this.EventData = EventData;
    }

    public async Run(IncludeComponent?:boolean){
        for(let i=Router.PageStacks.length-1;i>=0;i--){
            let Page = Router.PageStacks[i];
            if(IncludeComponent){
                let ComponentStack = Page.ComponentStack
                for(let c=ComponentStack.length-1;c>=0;c--){
                    ComponentStack[i].EventHandler(this);
                }
            }
            Page.EventHandler(this)
            if(this.Stop){
                break;
            }
        }
    }

    public Catch(){
        this.Stop = true;
    }

    public Pass(){
        this.Stop = false;
    }
}

export class CustomEvent<DataT> extends Event{
    constructor(EventName:string, EventData:DataT){
        super(EventName,EventData);
    }
}