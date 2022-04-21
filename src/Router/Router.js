/*
  Using react-router-dom@v5  
  Declare and set the exact path to every page component.
*/

import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';

//import the learner pages.
import LearnerCalendar from '../Learner/Pages/Calendar';
import LearnerCourses from '../Learner/Pages/Courses';
import LearnerHome from '../Learner/Pages/Home';
import LearnerMarks from '../Learner/Pages/Marks';
import LearnerMessages from '../Learner/Pages/Messages';

// Import authentication components.



export default function Router() {
  return (
    <Routers>
        <Switch>           
            <Route exact path='/' component={LearnerHome} />
            <Route exact path='/Learner-calendar' component={LearnerCalendar} />
            <Route exact path='/Learner-courses' component={LearnerCourses} />
            <Route exact path='/Learner-marks' component={LearnerMarks} />
            <Route exact path='/Learner-messages' component={LearnerMessages} />
        </Switch>
    </Routers>
  )
}