import axios from 'axios';
import hosturl from '../hosturl.js';


export default {
    BoardOfEducation(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/syllabus').
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    GradesForStudentBasedOnBoard(boardforgrade, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/listgradesofsyllabustype', boardforgrade).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    AcademicYears(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/academicsandboards').
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    AddAcademicyear(addacademicyear, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addacademicyear', addacademicyear).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    UpdateAcademiYear(updateacademicyear, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addacademicyear', updateacademicyear).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })

    },
    Subjects(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/subjects').
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    NewSubject(subject, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addsubjects', subject).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    TestTypes(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/listtesttype').
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })

    },
    NewTestType(testtype, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addtesttype', testtype).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })

    },
    Houses(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/listhouses').
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    NewHouse(house, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addhousedetails', house).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })

    },
    DeleteHouse(houseid, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/deletehousedetails', houseid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    EditHouse(house, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/edithousedetails', house).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    NumberOfStudentsInHouse(housename, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/listnoofstudentsinhouse', housename).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    Students(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/students').
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    NewStudent(student, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addstudent', student).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    UpdateStudent(student, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/updatestudent', student).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })

    },
    Roles(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/roles').
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    Teachers(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/teachers').
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })

    },
    NewTeacher(teacher, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addteacher', teacher).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })

    },
    UpdateTeacher(teacher, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addteacher', teacher).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    Grades(syllabustype, id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/listgrades?syllabusType=' + syllabustype).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    NewGrade(grade, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addgrade', grade).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    Sections(yearandboard, id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/classrooms' + '/' + yearandboard.academicyearid + '/' + yearandboard.syllabustype).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    NewSection(section, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/createclass', section).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })

    },
    UpdateSection(section, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/updateclassteacher', section).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    Events(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/events').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(resp);
            })
        })
    },
    NewEvent(event, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/postevent', event).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    DeleteEvent(eventid, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/deleteevent', eventid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    UpdateEvent(editevent, id) {
        return new Promise(function(resolve, reject) {
            axios.patch(hosturl + id + '/editevent', editevent).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    News(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/news').
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    PostNews(news, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/postnews', news).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    DeleteNews(newsid, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/deletenews', newsid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    EditNews(editnews, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/editnews', editnews).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    Holidays(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/holidays').
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    NewHoliday(holiday, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/postholiday', holiday).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    DeleteHoliday(holidayid, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/deleteholiday', holidayid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    EditHoliday(editholiday, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/editholiday', editholiday).
            then(function(res) {
                resolve(res);
            }).
            catch(function(err) {
                reject(err);
            })
        })
    },
    ListOfTests(grade, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/listtests', grade).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    StatusOfTests(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/liststatusoftests').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    Testmodes(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/listtestmode').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    NewTest(test, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/createtest', test).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    SectionDetails(sectionid, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/classroomdetails', sectionid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    AssigningTeacherToSubject(addingteachersubject, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/assignteachertosubject', addingteachersubject).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    StudentsOfGrade(sectionid, id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/' + sectionid.id + '/studentsofgrade').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    NewStudentToSection(studentid, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addstudenttoclassroom', studentid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TestDetailsOfSection(sectionid, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/listtests', sectionid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    SubjectDetailsOfATest(testid, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/testsubjectdetails', testid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    NewUser(user) {
        console.log(user);
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + 'tenant/register', user).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },

    MyClass(userid, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/myclassroom', userid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    MySubjects(userid, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/mysubjects', userid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },

    NewPeriodType(periodtype, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/tt/periodtype', periodtype).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    MyClassStudents(sectionid, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/liststudentsofclassroom', sectionid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },

    Getperiodtypes(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/tt/periodtypes').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    NewPeriod(periods, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/tt/period', periods).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    GetperiodsList(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/tt/periodslist').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    SubjectTests(mysubject, id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/subjectstests/' + mysubject.id + '/' + mysubject.subjectname).

            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    SubjectTestEdit(subjectdetails, id) {
        console.log(subjectdetails)
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addoreditsyllabus', subjectdetails).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    EnterMarks(testdetails, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/entermarks', testdetails).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    AddMarks(marks, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addmarks', marks).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },

    GetTimingsforsection(sections, id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/tt/periods/' + sections.id).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })

        })
    },
    AddingsubjectToPeriod(addingsubjects, id) {
        console.log(addingsubjects)
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/tt/periodcell', addingsubjects).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })

    },

    MyClassAssignments(subject, id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/assignments/classroom/' + subject.classroomid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },

    MySubjectAssignments(subject, id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/assignments/classroom/' + subject.classroomid + '/' + subject.subjectid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    AddMySubjectAssignment(assignment, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/assignments/assign', assignment).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    DeleteMySubjectAssignment(assignmentid, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/assignments/delete', assignmentid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    AllEventsData(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/events').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    AllNewsData(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/news').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })

    },
    AllHolidaysData(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/holidays').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    GetTimingsForMyclass(sectionid, id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/tt/periods/' + sectionid.id, ).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    GetTeacherTodaySchedule(schedules, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/teacherschedule/today', schedules).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    Dairy(sectionid, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/listinformation', sectionid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })

    },
    AddDairy(dairy, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addentry', dairy).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    UpdateDairy(dairy, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/updateentry', dairy).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    GetTodaySchedules(schedules, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/teacherschedule/today/schedule', schedules).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    AllStudentstomorrowBirthday(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/birthday/tomorrow').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    AllStudentsBirthdayData(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/birthday/today').

            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    ViewResults(id, classroomdetails) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/viewresults', classroomdetails).

            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    Attendance(id, classroom) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/attendance/' + classroom.id, classroom).

            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    SubjectAttendance(id, classroom) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/attendance/' + classroom.id + '/' + classroom.subjectid, classroom).

            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    RecordAttendance(id, attendance) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/recordattendance', attendance).

            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    Studentdetails(id, student) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/students/' + student.id).

            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    ClassTeacherMessages(id, teacherid) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/teachermessages/', teacherid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    ClassRoomStudents(id, sectionid) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/' + sectionid.id + '/classroomstudents').

            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    MyclassNewMessage(id, newmessage) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/sendmessagetoparent/', newmessage).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    ChangeTestStatus(id, testidforstatus) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/changeteststatus', testidforstatus).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportDashboard(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/bussummery').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportStaff(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/staff').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportStops(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/stops').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportNewStop(stop, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addstop', stop).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportBuses(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/buses').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportNewBus(bus, id) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/busregistration', bus).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportRoutes(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/routes').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportBusDrivers(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/bus/drivers').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportBusAttenders(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/bus/attenders').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportBusTeachers(id) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/bus/teachers').
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportMoreBusDetails(id, busdetails) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addbusdetails', busdetails).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportNewRoute(id, route) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/addroute', route).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportDeleteRoute(id, routeid) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/deleteroutes', routeid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportDeleteBus(id, bus) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/deletebus', bus).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportDeleteStop(id, stop) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/deletestop', stop).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportDeleteStaff(id, driver) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/deletestaff', driver).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    TransportNewStaff(id, newstaff) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/staffregistration', newstaff).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
    MyChild(id, userid) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/parentchildrens', userid).then(function(res) {
                resolve(res);
            }).catch(function(res) {
                reject(res);
            })
        })
    },
    ChildTests(id, sendchildids) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/listtestsbystudent', sendchildids).then(function(res) {
                resolve(res);
            }).catch(function(res) {
                reject(res);
            })
        })
    },
    ChildViewResults(id, childclassdetails) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/marks', childclassdetails).then(function(res) {
                resolve(res);
            }).catch(function(res) {
                reject(res);
            })
        })
    },
    AttendanceOfStudent(id, childclassdetails) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/studentattendance', childclassdetails).then(function(res) {
                resolve(res);
            }).catch(function(res) {
                reject(res);
            })
        })
    },
    ChildWorksheets(id, classid) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/worksheets', classid).then(function(res) {
                resolve(res);
            }).catch(function(res) {
                reject(res);
            })
        })
    },
    ChildJournal(id, classid) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/timeline', classid).then(function(res) {
                resolve(res);
            }).catch(function(res) {
                reject(res);
            })
        })
    },
    ChildAssignments(id, classid) {
        return new Promise(function(resolve, reject) {
            axios.get(hosturl + id + '/assignments/classroom/'+ classid).then(function(res) {
                resolve(res);
            }).catch(function(res) {
                reject(res);
            })
        })
    },
    parentMessages(id, teacherid) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/parentmessages/', teacherid).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    },
     parentReply(id, newmessage) {
        return new Promise(function(resolve, reject) {
            axios.post(hosturl + id + '/sendmessagetoteacher/', newmessage).
            then(function(res) {
                resolve(res);
            }).
            catch(function(res) {
                reject(res);
            })
        })
    }



}