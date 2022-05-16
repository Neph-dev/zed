/*
Using react-router-dom@v5  
  Declare and set the exact path to every page component.
*/

import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';

// Import authentication components.
import LoginAs from '../Auth/Pages/LoginAs';

//import the admin pages.
import {
  AdminAccount,
  AdminHome,
  AdminGrade,
  AdminGradeTeachers,
  AdminGradeStudents,
  AdminSchool,
  AdminSubject,
} from '../Super_Admin/Pages';

//import the learner pages.
import { 
  LearnerHome, 
  LearnerAccount, 
  LearnerAssignments, 
  LearnerAssignmentsFolder,
  LearnerCalendar,
  LearnerCourse,
  CourseMarks,
  LearnerSubjects,
  LearnerDiscussion,
  LearnerMarks,
  LearnerMessages,
  LearnerMaterials
} from '../Learner/Pages';

//import the teacher pages.
import { 
  TeacherHome, 
  TeacherAccount, 
  TeacherAssignments, 
  TeacherAssignmentsFolder,
  TeacherClasses,
  TeacherDiscussion,
  TeacherMaterials,
  TeacherSubjects,
  TeacherSubjectDashboard,
  TeacherStudents,
  TeacherStudentAssign,
  TeacherStudentMarks,
  TeacherStudentProfile,
} from '../Teacher/Pages';


export default function Router() {
  return (
    <Routers>
        <Switch>           
            
            <Route exact path='/' component={LoginAs} />
            
            <Route exact path='/Admin-dashboard' component={AdminHome} />
            <Route exact path='/Admin-account' component={AdminAccount} />
            <Route exact path='/Admin-grade' component={AdminGrade} />
            <Route exact path='/Admin-grade-students' component={AdminGradeStudents} />
            <Route exact path='/Admin-grade-teachers' component={AdminGradeTeachers} />
            <Route exact path='/Admin-school' component={AdminSchool} />
            <Route exact path='/Admin-subject' component={AdminSubject} />

            <Route exact path='/Learner-dashboard' component={LearnerHome} />
            <Route exact path='/Learner-account' component={LearnerAccount} />
            <Route exact path='/Learner-assignments' component={LearnerAssignments} />
            <Route exact path='/Learner-assignment-folder' component={LearnerAssignmentsFolder} />
            <Route exact path='/Learner-calendar' component={LearnerCalendar} />
            <Route exact path='/Learner-course' component={LearnerCourse} />
            <Route exact path='/Learner-course-marks' component={CourseMarks} />
            <Route exact path='/Learner-course-discussion' component={LearnerDiscussion} />
            <Route exact path='/Learner-subjects' component={LearnerSubjects} />
            <Route exact path='/Learner-marks' component={LearnerMarks} />
            <Route exact path='/Learner-materials' component={LearnerMaterials} />
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