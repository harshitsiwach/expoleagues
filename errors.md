entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:2509 TypeError: Cannot read properties of undefined (reading 'level')
    at handleLog (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:105438:22)
    at Object.warn (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:105481:9)
    at entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:107516:27
    at loadModuleImplementation (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:254:34)
    at guardedLoadModule (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:166:14)
    at metroRequire (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:79:75)
    at entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:104926:17
    at loadModuleImplementation (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:254:34)
    at guardedLoadModule (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:166:14)
    at metroRequire (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:79:75)

The above error occurred in the <ContextNavigator> component.

React will try to recreate this component tree from scratch using the error boundary you provided, LogBoxStateSubscription.

registerError @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:2509
console.error @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:2447
defaultOnCaughtError @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9011
logCaughtError @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9038
runWithFiberInDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:5317
inst.componentDidCatch.update.callback @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9079
callCallback @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:7471
commitCallbacks @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:7479
runWithFiberInDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:5317
commitClassCallbacks @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:10355
commitLayoutEffectOnFiber @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:10665
recursivelyTraverseLayoutEffects @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11122
commitLayoutEffectOnFiber @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:10654
recursivelyTraverseLayoutEffects @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11122
commitLayoutEffectOnFiber @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:10654
recursivelyTraverseLayoutEffects @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11122
commitLayoutEffectOnFiber @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:10654
recursivelyTraverseLayoutEffects @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11122
commitLayoutEffectOnFiber @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:10670
flushLayoutEffects @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:12132
commitRoot @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:12042
commitRootWhenReady @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11608
performWorkOnRoot @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11588
performWorkOnRootViaSchedulerTask @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:12494
performWorkUntilDeadline @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:18142
<ContextNavigator>
exports.jsxDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:1502
ExpoRoot @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:89122
react-stack-bottom-frame @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:17335
renderWithHooks @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:7545
updateFunctionComponent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9238
beginWork @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9824
runWithFiberInDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:5317
performUnitOfWork @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11897
workLoopConcurrentByScheduler @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11893
renderRootConcurrent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11876
performWorkOnRoot @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11514
performWorkOnRootViaSchedulerTask @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:12494
performWorkUntilDeadline @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:18142
<ExpoRoot>
exports.jsxDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:1502
App @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:241782
react-stack-bottom-frame @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:17335
renderWithHooks @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:7545
updateFunctionComponent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9238
beginWork @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9824
runWithFiberInDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:5317
performUnitOfWork @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11897
workLoopConcurrentByScheduler @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11893
renderRootConcurrent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11876
performWorkOnRoot @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11514
performWorkOnRootViaSchedulerTask @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:12494
performWorkUntilDeadline @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:18142
<App>
exports.jsxDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:1502
ErrorOverlay @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:655232
react-stack-bottom-frame @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:17335
renderWithHooks @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:7545
updateFunctionComponent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9238
beginWork @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9824
runWithFiberInDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:5317
performUnitOfWork @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11897
workLoopConcurrentByScheduler @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11893
renderRootConcurrent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11876
performWorkOnRoot @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11514
performWorkOnRootViaSchedulerTask @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:12494
performWorkUntilDeadline @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:18142
<ErrorOverlay>
exports.jsxDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:1502
WithDevTools @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:73541
react-stack-bottom-frame @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:17335
renderWithHooks @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:7545
updateFunctionComponent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9238
beginWork @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9824
runWithFiberInDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:5317
performUnitOfWork @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11897
workLoopConcurrentByScheduler @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11893
renderRootConcurrent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11876
performWorkOnRoot @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11514
performWorkOnRootViaSchedulerTask @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:12494
performWorkUntilDeadline @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:18142
<withDevTools(ErrorOverlay)>
exports.createElement @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:2149
renderApplication @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:54667
run @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:54566
runApplication @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:54604
registerRootComponent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:73513
(anonymous) @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:655160
exports.startTransition @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:2221
renderRootComponent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:655155
(anonymous) @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:240784
loadModuleImplementation @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:254
guardedLoadModule @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:166
metroRequire @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:79
(anonymous) @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:240771
loadModuleImplementation @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:254
guardedLoadModule @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:159
metroRequire @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:79
(anonymous) @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:655777
entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:2509 Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.
registerError @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:2509
console.error @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:2447
(anonymous) @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:12381
runWithFiberInDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:5317
warnAboutUpdateOnNotYetMountedFiberInDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:12380
getRootForUpdatedFiber @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:6522
enqueueUpdate @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:7309
enqueueSetState @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:17475
Component.setState @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:1909
(anonymous) @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:2902
retry @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:2901
(anonymous) @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:2884
emit @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:3251
hideLoading @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:71081
(anonymous) @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:71227
emit @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:71567
HMRClient._ws.onmessage @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:71381
<LogBoxStateSubscription>
exports.jsxDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:1502
ErrorOverlay @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:655231
react-stack-bottom-frame @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:17335
renderWithHooks @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:7545
updateFunctionComponent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9238
beginWork @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9824
runWithFiberInDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:5317
performUnitOfWork @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11897
workLoopConcurrentByScheduler @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11893
renderRootConcurrent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11876
performWorkOnRoot @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11514
performWorkOnRootViaSchedulerTask @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:12494
performWorkUntilDeadline @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:18142
<ErrorOverlay>
exports.jsxDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:1502
WithDevTools @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:73541
react-stack-bottom-frame @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:17335
renderWithHooks @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:7545
updateFunctionComponent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9238
beginWork @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:9824
runWithFiberInDEV @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:5317
performUnitOfWork @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11897
workLoopConcurrentByScheduler @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11893
renderRootConcurrent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11876
performWorkOnRoot @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:11514
performWorkOnRootViaSchedulerTask @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:12494
performWorkUntilDeadline @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:18142
<withDevTools(ErrorOverlay)>
exports.createElement @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:2149
renderApplication @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:54667
run @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:54566
runApplication @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:54604
registerRootComponent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:73513
(anonymous) @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:655160
exports.startTransition @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:2221
renderRootComponent @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:655155
(anonymous) @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:240784
loadModuleImplementation @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:254
guardedLoadModule @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:166
metroRequire @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:79
(anonymous) @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:240771
loadModuleImplementation @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:254
guardedLoadModule @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:159
metroRequire @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:79
(anonymous) @ entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:655777
entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:2509 TypeError: Cannot read properties of undefined (reading 'level')
    at handleLog (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:105438:22)
    at Object.warn (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:105481:9)
    at entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:107516:27
    at loadModuleImplementation (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:254:34)
    at guardedLoadModule (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:166:14)
    at metroRequire (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:79:75)
    at entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:104926:17
    at loadModuleImplementation (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:254:34)
    at guardedLoadModule (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:166:14)
    at metroRequire (entry.bundle?platform=web&dev=true&hot=false&lazy=true&transform.routerRoot=app&transform.reactCompiler=true:79:75)

The above error occurred in the <ContextNavigator> component.

React will try to recreate this component tree from scratch using the error boundary you provided, LogBoxStateSubscription.