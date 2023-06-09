import { primaryUserDetails, secondaryUserDetails, setIsSecondaryUserOnline, setIsSecondaryUserTyping, setMessage, setPrimaryUserDetails, setSecondaryUserDetails } from "../App";

type ChatWidgetCtx = {
    setPrimaryUserName: (name: string) => void;
    setPrimaryUserDescription: (description: string) => void;
    setPrimaryUserImageURL: (url: string) => void;
    setPrimaryUserMessage: (msg: string) => void;
    setSecondaryUserName: (name: string) => void;
    setSecondaryUserDescription: (description: string) => void;
    setSecondaryUserIsOnline: (isOnline: boolean) => void;
    setSecondaryUserIsTyping: (isTyping: boolean) => void;
    setSecondaryUserImageURL: (url: string) => void;
    setSecondaryUserMessage: (msg: string) => void;
    onPrimaryUserMessageChange: (callback:(msg: string) => any) => void;
    onPrimaryUserMessageSubmit: (callback:(msg: string) => any) => void;
  };
  

function setPrimaryUserName(name:string):void{
    setPrimaryUserDetails({...primaryUserDetails(), name})
}


function setPrimaryUserDescription(description:string):void{
    setPrimaryUserDetails({...primaryUserDetails(), description})
}

function setPrimaryUserImageURL(imageURL:string):void{
    setPrimaryUserDetails({...primaryUserDetails(), imageURL})
}

function setPrimaryUserMessage(msg:string):void{
    setMessage((a) => [...a, { value: msg, type: 0 }]);
}

function setSecondaryUserName(name:string):void{
    setSecondaryUserDetails({...secondaryUserDetails(), name})
}


function setSecondaryUserDescription(description:string):void{
    setSecondaryUserDetails({...secondaryUserDetails(), description})
}

function setSecondaryUserImageURL(imageURL:string):void{
    setSecondaryUserDetails({...secondaryUserDetails(), imageURL})
}

function setSecondaryUserIsOnline(isOnline:boolean):void{
    setIsSecondaryUserOnline(isOnline)
}

function setSecondaryUserIsTyping(isTyping:boolean):void{
    setIsSecondaryUserTyping(isTyping)
}


function setSecondaryUserMessage(msg:string):void{
    setMessage((messages) => [...messages, { value: msg, type: 1 }]);
}

let cbOnPrimaryUserMessageChange:((msg: string) => any) | undefined = undefined
let cbOnPrimaryUserMessageSubmit:((msg: string) => any) | undefined = undefined

function onPrimaryUserMessageChange(callback:(msg: string) => any):void{
    cbOnPrimaryUserMessageChange = callback
}

function onPrimaryUserMessageSubmit(callback:(msg: string) => any):void{
    cbOnPrimaryUserMessageSubmit = callback
}

function getBodhifyChatWidgetCtxEntry():ChatWidgetCtx{
    return {
        setPrimaryUserName, 
        setPrimaryUserDescription, 
        setPrimaryUserImageURL, 
        setPrimaryUserMessage, 
        setSecondaryUserName, 
        setSecondaryUserDescription,
        setSecondaryUserImageURL,
        setSecondaryUserIsOnline,
        setSecondaryUserIsTyping,
        setSecondaryUserMessage,
        onPrimaryUserMessageChange,
        onPrimaryUserMessageSubmit
    }
}

export type {ChatWidgetCtx}
export {
    getBodhifyChatWidgetCtxEntry,
    cbOnPrimaryUserMessageChange,
    cbOnPrimaryUserMessageSubmit
}