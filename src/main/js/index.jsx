import React from 'react';
import ReactDOM from 'react-dom';
import store from '@jenkins-cd/es-extensions';
import TopLink from './TopLink'
import { ExecutorInfoPage } from './ExecutorInfoPage';
import { ItemExecutorInfo } from './ItemExecutorInfo';
/**
 * 
 * extensions:
  - extensionPoint: jenkins.main.routes
    component: Routes

  - extensionPoint: jenkins.blueocean.top.links
    component: TopLink
    
  - extensionPoint: jenkins.pipeline.branches.list.action
    component: ItemExecutorInfo

  - extensionPoint: jenkins.pipeline.activity.list.action
    component: ItemExecutorInfo

 */

store.register('jenkins.blueocean.top.links', ({container}) => {
  ReactDOM.render(<TopLink />, container)
});

store.register('jenkins.main.routes', () => {
  return {
    path: 'ExecutorInfoPage',
    renderFn: ({container}) => ReactDOM.render(<ExecutorInfoPage />, container)
  }
}) 

store.register('jenkins.pipeline.branches.list.action', ({container}) => {
  ReactDOM.render(<ItemExecutorInfo />, container);  
})

store.register('jenkins.pipeline.activity.list.action', ({container}) => {
  ReactDOM.render(<ItemExecutorInfo />, container);  
})

