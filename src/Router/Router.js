/*
  Using react-router-dom@v5  
  Declare and set the exact path to every page component.
*/

import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';

//import the learner pages.
import LearnerCourses from '../Learner/Pages/Courses';
import LearnerHome from '../Learner/Pages/Home';

// Import authentication components.



export default function Router() {
  return (
    <Routers>
        <Switch>           
            <Route exact path='/' component={LearnerHome} />
            <Route exact path='/learner-courses' component={LearnerCourses} />
        </Switch>
    </Routers>
  )
}