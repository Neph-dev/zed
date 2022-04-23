/*
  Using react-router-dom@v5  
  Declare and set the exact path to every page component.
*/

import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';

//import the learner pages.
import LearnerAccount from '../Learner/Pages/Account';
import LearnerCalendar from '../Learner/Pages/Calendar';
import LearnerCourse from '../Learner/Pages/Course';
import CourseMarks from '../Learner/Pages/CourseMarks';
import LearnerCourses from '../Learner/Pages/Courses';
import LearnerDiscussion from '../Learner/Pages/Discussion';
import LearnerHome from '../Learner/Pages/Home';
import LearnerMarks from '../Learner/Pages/Marks';
import LearnerMessages from '../Learner/Pages/Messages';

// Import authentication components.



export default function Router() {
  return (
    <Routers>
        <Switch>           
            <Route exact path='/' component={LearnerHome} />
            <Route exact path='/Learner-account' component={LearnerAccount} />
            <Route exact path='/Learner-calendar' component={LearnerCalendar} />
            <Route exact path='/Learner-course' component={LearnerCourse} />
            <Route exact path='/Learner-course-marks' component={CourseMarks} />
            <Route exact path='/Learner-course-discussion' component={LearnerDiscussion} />
            <Route exact path='/Learner-courses' component={LearnerCourses} />
            <Route exact path='/Learner-marks' component={LearnerMarks} />
            <Route exact path='/Learner-messages' component={LearnerMessages} />
        </Switch>
    </Routers>
  )
}