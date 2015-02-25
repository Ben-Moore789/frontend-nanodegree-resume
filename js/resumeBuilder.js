/*
Cleaned using http://javascriptbeautifier.com/, which changed all my variable
names before I realized it and didn't have a recent copy backed up.  Oops.
*/

var bio = {
    name: "Ben Moore",
    role: "",
    contacts: {
        mobile: "(205)712-0012",
        email: "Ben.Moore789@gmail.com",
        github: "Duke-Gizmo",
        twitter: "@BenMoore789",
        location: "Atlanta, GA"
    },
    welcomeMessage: "Steadfast, confident professional with an infectious enthusiasm " +
        "for technology, education and process improvement.",
    skills: {
        isntruction: [ "Leadership", "Adult Education", "Personnel Management", "Communication", 
            "Problem Solving", "Detail Oriented", "Budget Planning", "Resource Management", "CPR"],
        programLanguages: [ "Python", "HTML", "CSS", "JavaScript", "Canvas", "VBA",
                            "Windows and Office Proficient" ]
        // "Aeronautics", "Aerobatics", "Tactical Operations", 
            // "Emergency Procedures", "Personnel Recovery Operations" ],
    },
    bioPic: "images/me.jpg",
    skillsets: [ "", "Technical:"]
};

bio.display = function() {
    var a = HTMLheaderName.replace("%data%", bio.name);
    var b = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(a+b);
    var c = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var d = HTMLemail.replace("%data%", bio.contacts.email);
    var e = HTMLgithub.replace("%data%", bio.contacts.github);
    var f = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var g = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(c + d + e + f + g + HTMLLinkedIn);
    $("#footerContacts").append(c + d + e + f + g);
    var h = HTMLbioPic.replace("%data%", bio.bioPic);
    var i = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(h + i);
    $("#header").append(HTMLskillsStart);
    var j = 0;
    for (skillset in bio.skills) {
        var k = 0;
        var l = HTMLskillset.replace("%data%", bio.skillsets[j]);
        var m = ".skills:eq(" + j + ")";
        $("#header").append(l);
        while (k < bio.skills[skillset].length) {
            var n = HTMLskills.replace("%data%", bio.skills[skillset][k]);
            $(m).append(n);
            k += 1;
        }
        j += 1;
    }
};

bio.display();

var education = {
    schools: [ {
        name: "Udacity",
        location: "Columbus, MS",
        degree: "Nano",
        majors: "Front-End Web Developer",
        dates: "Currently Enrolled",
        url: "https://www.udacity.com/course/nd001"
    }, {
        name: "Webster University Online",
        location: "Valdosta, GA",
        degree: "Masters",
        majors: "Information Technology Management",
        dates: "November 2010",
        url: "http://www.webster.edu/masters/information-technology-management.html"
    }, {
        name: "Embry Riddle Aeronautical University Worldwide",
        location: "Shreveport, LA",
        degree: "BA",
        majors: [ "Professional Aeronautics", " Minor: Aviation Safety" ],
        dates: "May 2002",
        url: "http://worldwide.erau.edu/degrees-programs/programs/bachelors/aeronautics/index.html"
    } ],
    onlineCourses: [ {
        title: "Intro to Computer Science",
        school: "Udacity",
        dates: "Dec 2014",
        url: "https://www.udacity.com/course/cs101"
    }, {
        title: "Intro to HTML and CSS",
        school: "Udacity",
        dates: "Dec 2014",
        url: "https://www.udacity.com/course/ud304"
    }, {
        title: "JavaScript Basics",
        school: "Udacity",
        dates: "Jan 2015",
        url: "https://www.udacity.com/course/ud804"
    } ]
};

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var a = HTMLschoolName.replace("%data%", education.schools[school].name);
        var b = a.replace("#", education.schools[school].url);
        var c = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var d = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var e = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        var f = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(b + d + f);
        $(".education-entry:last").append(c + e);
    }
    // $(".education-entry:last").append(HTMLonlineClasses);
    // for (course in education.onlineCourses) {
    //     var g = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    //     var k = g.replace("#", education.onlineCourses[course].url);
    //     var h = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    //     var i = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    //     var j = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    //     $(".education-entry:last").append(k + h + i);
    //     $(".education-entry:last").append(j);
    // }
};

education.display();

var work = {
    jobs: [ {
        employer: "USAF",
        title: "Primary Pilot Training Instructor Pilot (T-6A)",
        location: "Columbus, MS",
        dates: "Jun 2011 - Feb 2015",
        description: ["•    Ensured optimum training opportunities and progress by conducting and "+
            "supervising military flight and academic instruction in a dynamic, complex, high-density "+
            "flying environment during 5 month course per student class.",
            "•   Created electronic tools in Microsoft Excel/Visual Basic to plan for 150+ flights "+
            "a day using only 35-45 jets with strict syllabus and complex aircrew limitations on "+
            "students and instructors flying multiple times.  Exponential increases in efficiency.",
            "•   Led team in management of student records of over 3,000 events earned highest rating "+
            "of “Excellent” overall on internal inspection with 6 “Outstanding” sub-areas.",
            "•   Strengthened ties with critical allied country as handpicked mentor to second-ever "+
            "female Japanese exchange pilot student.   Student graduated with honors."]
    }, {
        employer: "USAF",
        title: "Afghan Air Advisor, Instructor Pilot and Chief of Education (C-208B)",
        location: "Kandahar, Afghanistan",
        dates: "Dec 2012 - Dec 2013",
        description: ["•    Mentored, trained and assisted Afghan aircrew with mission planning, "+
            "tactics, techniques and procedures (TTPs) for tactical airlift mobility operations,"+
            " medical/ casualty evacuation and emergency procedures in high threat mountainous terrain.",
            "•   Led mission planning system upgrade; standardized program across the force for 7.9K+ "+
            "annual flights leading to safer mission execution. Zero Class A/B mishaps.",
            "•   Led aircraft casualty evacuation configuration change, pushed data to other flying "+
            "units; increased evacuation capabilities by 27%, up to 640+ patients annually.",
            "•   Directed and advised Afghan Air Force leadership with managing English language "+
            "training program supporting 960 personnel Air Wing.   Led overhaul with streamlined 12-week "+
            "semesters, revised syllabi, and developed student record system; rapidly adopted/fielded by "+
            "5 other Defense Language schools in country.",
            "•   Authored 1st ever vocational aptitude battery tailored to foreign military with "+
            "40% literacy rate.  Set entry requirements and allowed measured and efficient alignment "+
            "of 4,000+ personnel into strength matched occupations and positions."]
    }, {
        employer: "USAF",
        title: "Combat Search and Rescue Instructor Pilot (HC-130P)",
        location: "Valdosta, GA",
        dates: "Mar 2008 - Jan 2011",
        description: ["•    Commanded 10-member crew on $30M aircraft performing worldwide CSAR missions"+
            " in support of contingency/maritime operations using night vision modified contour low-level "+
            "ops, helicopter aerial refueling, personnel & equipment deployments, & infiltration/exfiltration "+
            "trans-load operations.",
            "•   Test pilot for 1st ever HC-130 aircraft simulator and first test platform in 14 years for "+
            "pararescue operations test squadron researching new employment capabilities.",
            "•   Expertly managed unit training program, implemented web-based task tracking system of 73k "+
            "flying /48k ground training and special qualifications reducing non-mission ready crews by 50%.  "+
            "Unit fully mission capable first time in 4 years. ",
            "•   Implemented and tracked precision airdrop capability expansion providing Air Combat "+
            "Command's 1st-ever, all weather rescue operations capability.",
            "•   Crafted professional education program partnered with Georgia Tech; $35K program for "+
            "six military-tech courses facilitating expert training for airmen."]
    }, {
        employer: "USAF",
        title: "Tactical Airlift Pilot (C-130E/H1)",
        location: "Fayetteville, NC",
        dates: "Jul 2005 - Oct 2007",
        description: ["• Reviewed mission tasking and intelligence information to plan, command and " +
            "execute tactical airlift operations in austere locations with a crew of six.",
            "• Created electronic mission planning tools to support deployed airlift crews in " +
            "accomplishment of 2,000+ missions with unprecedented 97% success rate."]
    }, {
        employer: "USAF",
        title: "B-52H Maintenance Technician",
        location: "Shreveport, LA",
        dates: "May 1999 - Nov 2002",
        description: ["• Troubleshot and maintained aircraft structures, systems, and components.",
            "• Tested and repaired components using mockups and test equipment."]
    } ]
};

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var a = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var b = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var c = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var d = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(a + b);
        $(".work-entry:last").append(c + d);
        var j = 0;
        for (bullet in work.jobs[job].description) {
            var k = 0;
            var l = HTMLworkDescription.replace("%data%", work.jobs[job].description[bullet]);
            $(".work-entry:last").append(l);
            j += 1;
        }
    }
};

work.display();

work.deployments = [ "Diego Garcia", "Ali Al Salem Air Base, Kuwait", "Camp Lemonnier, Djibouti" ];

var projects = {
    projects: [ //{
    //     title: "Web Crawler",
    //     dates: "Dec 2014",
    //     description: "Web Crawler",
    //     images: [ "http://lorempixel.com/400/200/technics", "http://lorempixel.com/400/200/business" ]
    // },
    {
        title: "Afghan Military Vocational Aptitude Test",
        dates: "December 2013",
        description: "• Authored 1st ever vocational aptitude battery tailored to foreign military with 40% " +
            "literacy rate.  Set entry requirements and allowed measured and efficient alignment of " +
            "4,000+ personnel into strength matched occupations and positions.",
        images: [ "images/test.jpg", "images/one.jpg", "images/two.jpg" ]
    } ]
};

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var a = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var b = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var c = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(a + b + c);
        for (image in projects.projects[project].images) {
            var d = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(d);
        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);