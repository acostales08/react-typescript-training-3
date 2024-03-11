import React from 'react'
import { RouterConfig } from './RouterConfig'
import {Switch, Route} from 'react-router-dom'
import { CreateUser, UserList } from '../Pages'

type Props = {
  component: any,
  exact: boolean,
  path: string
}

const DynamicRouter = ({component: Component, ...rest}: Props) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Component {...props}/>
      )}
    />
  )
}

export default () => (
  <Switch>
    <DynamicRouter exact path={RouterConfig.userList.path} component={UserList}/>
    <DynamicRouter exact path={RouterConfig.createUser.path} component={CreateUser}/>
  </Switch>
)