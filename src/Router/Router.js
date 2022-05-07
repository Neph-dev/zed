/*
  Using react-router-dom@v5  
  Declare and set the exact path to every page component.
*/

import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';

//import the admin pages.
import AdminAccount from '../Super_Admin/Pages/Account';
import AdminHome from '../Super_Admin/Pages/Home';
import AdminGrade from '../Super_Admin/Pages/Grade';
import AdminSchool from '../Super_Admin/Pages/School';
import AdminSubject from '../Super_Admin/Pages/Subject';


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
import TeacherAccount from '../Teacher/Pages/Account';
import TeacherAssignments from '../Teacher/Pages/Assignments';
import TeacherAssignmentsFolder from '../Teacher/Pages/AssignmentsFolder';
import TeacherClasses from '../Teacher/Pages/Classes';
import TeacherDiscussion from '../Teacher/Pages/Discussion';
import TeacherHome from '../Teacher/Pages/Home';
import TeacherMaterials from '../Teacher/Pages/Materials';
import TeacherSubjects from '../Teacher/Pages/Subjects';
import TeacherSubjectDashboard from '../Teacher/Pages/SubjectDashboard';
import TeacherStudents from '../Teacher/Pages/Students';
import TeacherStudentAssign from '../Teacher/Pages/StudentAssignments';
import TeacherStudentMarks from '../Teacher/Pages/StudentMarks';
import TeacherStudentProfile from '../Teacher/Pages/StudentProfile';

// Import authentication components.



export default function Router() {
  return (
    <Routers>
        <Switch>           
            
            <Route exact path='/Admin-dashboard' component={AdminHome} />
            <Route exact path='/Admin-account' component={AdminAccount} />
            <Route exact path='/Admin-grade' component={AdminGrade} />
            <Route exact path='/Admin-school' component={AdminSchool} />
            <Route exact path='/Admin-subject' component={AdminSubject} />

            <Route exact path='/' component={LearnerHome} />
            <Route exact path='/Learner-account' component={LearnerAccount} />
            <Route exact path='/Learner-calendar' component={LearnerCalendar} />
            <Route exact path='/Learner-course' component={LearnerCourse} />
            <Route exact path='/Learner-course-marks' component={CourseMarks} />
            <Route exact path='/Learner-course-discussion' component={LearnerDiscussion} />
            <Route exact path='/Learner-subjects' component={LearnerSubjects} />
            <Route exact path='/Learner-marks' component={LearnerMarks} />
            <Route exact path='/Learner-messages' component={LearnerMessages} />

            <Route exact path='/Teacher-assignments' component={TeacherAssignments} />
            <Route exact path='/Teacher-assignment-folder' component={TeacherAssignmentsFolder} />
            <Route exact path='/Teacher-dashboard' component={TeacherHome} />
            <Route exact path='/Teacher-classes' component={TeacherClasses} />
            <Route exact path='/Teacher-materials' component={TeacherMaterials} />
            <Route exact path='/Teacher-students' component={TeacherStudents} />
            <Route exact path='/Teacher-student-assignments' component={TeacherStudentAssign} />
            <Route exact path='/Teacher-student-marks' component={TeacherStudentMarks} />
            <Route exact path='/Teacher-student-profile' component={TeacherStudentProfile} />
            <Route exact path='/Teacher-subjects' component={TeacherSubjects} />
            <Route exact path='/Teacher-subject-dashboard' component={TeacherSubjectDashboard} />
            <Route exact path='/Teacher-discussion' component={TeacherDiscussion} />
            <Route exact path='/Teacher-account' component={TeacherAccount} />

        </Switch>
    </Routers>
  )
}