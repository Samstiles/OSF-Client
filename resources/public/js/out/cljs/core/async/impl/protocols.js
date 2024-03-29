// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

cljs.core.async.impl.protocols.ReadPort = (function (){var obj32443 = {};
return obj32443;
})();

/**
 * derefable val if taken, nil if take was enqueued
 */
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((function (){var and__20671__auto__ = port;
if(and__20671__auto__){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else {
return and__20671__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__21319__auto__ = (((port == null))?null:port);
return (function (){var or__20683__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});


cljs.core.async.impl.protocols.WritePort = (function (){var obj32445 = {};
return obj32445;
})();

/**
 * derefable boolean (false if already closed) if handled, nil if put was enqueued.
 * Must throw on nil val.
 */
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((function (){var and__20671__auto__ = port;
if(and__20671__auto__){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else {
return and__20671__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__21319__auto__ = (((port == null))?null:port);
return (function (){var or__20683__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});


cljs.core.async.impl.protocols.Channel = (function (){var obj32447 = {};
return obj32447;
})();

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((function (){var and__20671__auto__ = chan;
if(and__20671__auto__){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else {
return and__20671__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__21319__auto__ = (((chan == null))?null:chan);
return (function (){var or__20683__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((function (){var and__20671__auto__ = chan;
if(and__20671__auto__){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else {
return and__20671__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__21319__auto__ = (((chan == null))?null:chan);
return (function (){var or__20683__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
})().call(null,chan);
}
});


cljs.core.async.impl.protocols.Handler = (function (){var obj32449 = {};
return obj32449;
})();

/**
 * returns true if has callback. Must work w/o lock
 */
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((function (){var and__20671__auto__ = h;
if(and__20671__auto__){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else {
return and__20671__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__21319__auto__ = (((h == null))?null:h);
return (function (){var or__20683__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});

/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((function (){var and__20671__auto__ = h;
if(and__20671__auto__){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else {
return and__20671__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__21319__auto__ = (((h == null))?null:h);
return (function (){var or__20683__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});


cljs.core.async.impl.protocols.Buffer = (function (){var obj32451 = {};
return obj32451;
})();

cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((function (){var and__20671__auto__ = b;
if(and__20671__auto__){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else {
return and__20671__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__21319__auto__ = (((b == null))?null:b);
return (function (){var or__20683__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((function (){var and__20671__auto__ = b;
if(and__20671__auto__){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else {
return and__20671__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__21319__auto__ = (((b == null))?null:b);
return (function (){var or__20683__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((function (){var and__20671__auto__ = b;
if(and__20671__auto__){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else {
return and__20671__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__21319__auto__ = (((b == null))?null:b);
return (function (){var or__20683__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__21319__auto__)]);
if(or__20683__auto__){
return or__20683__auto__;
} else {
var or__20683__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(or__20683__auto____$1){
return or__20683__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function cljs$core$async$impl$protocols$add_BANG_(){
var G__32453 = arguments.length;
switch (G__32453) {
case 1:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (b){
return b;
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (b,itm){
if(!((itm == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"itm","itm",-713282527,null)))))].join('')));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_.call(null,b,itm);
});

cljs.core.async.impl.protocols.add_BANG_.cljs$lang$maxFixedArity = 2;

cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj32456 = {};
return obj32456;
})();


//# sourceMappingURL=protocols.js.map