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
import LearnerSubjects from '../Learner/Pages/Subjects';
import LearnerDiscussion from '../Learner/Pages/Discussion';
import LearnerHome from '../Learner/Pages/Home';
import LearnerMarks from '../Learner/Pages/Marks';
import LearnerMessages from '../Learner/Pages/Messages';

//import the teacher pages.
import TeacherClasses from '../Teacher/Pages/Classes';
import TeacherHome from '../Teacher/Pages/Home';
import TeacherSubjects from '../Teacher/Pages/Subjects';
import TeacherSubjectDashboard from '../Teacher/Pages/SubjectDashboard';

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
            <Route exact path='/Learner-subjects' component={LearnerSubjects} />
            <Route exact path='/Learner-marks' component={LearnerMarks} />
            <Route exact path='/Learner-messages' component={LearnerMessages} />

            <Route exact path='/Teacher-dashboard' component={TeacherHome} />
            <Route exact path='/Teacher-classes' component={TeacherClasses} />
            <Route exact path='/Teacher-subjects' component={TeacherSubjects} />
            <Route exact path='/Teacher-subject-dashboard' component={TeacherSubjectDashboard} />

        </Switch>
    </Routers>
  )
}