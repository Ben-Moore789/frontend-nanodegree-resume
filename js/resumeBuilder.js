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
        programLanguages: [ "Python", "HTML", "CSS", "JavaScript", "Canvas", "VBA",
                            "Windows and Office Proificient" ],
        isntruction: [ "Leadership", "Adult Education", "Personnel Management", "Communication", 
            "Problem Solving", "Detail Oriented", "Budget Planning", "Resource Management", "CPR"]
        // "Aeronautics", "Aerobatics", "Tactical Operations", 
            // "Emergency Procedures", "Personnel Recovery Operations" ],
    },
    bioPic: "images/me.jpg",
    skillsets: [ "Technical:", "Other:"]
};

bio.display = function() {
    var a = HTMLheaderName.replace("%data%", bio.name);
    var b = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(a + b);
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
    $(".education-entry:last").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        var g = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var h = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var i = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var j = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(g + h + i);
        $(".education-entry:last").append(j);
    }
};

education.display();

var work = {
    jobs: [ {
        employer: "USAF",
        title: "Primary Pilot Training Instructor Pilot (T-6A)",
        location: "Columbus, MS",
        dates: "Aug 2011 - Jan 2015",
        description: ["• Ensured optimum training opportunities and progress by conducting " +
            "and supervising student flight and academic instruction including: Aeronautics, " +
            "Aerobatics, Flight Planning, Emergency Procedures and Energy Management in a " +
            "dynamic, high speed, 3-dimensional classroom at up to 6 times the force of gravity.",
            "• Reviewed syllabus requirements and student progress to tailor instruction to " +
            "specific students in order to meet the rigorous demands of military flight.",
            "• Created electronic tools in VBA to plan for 150+ flights a day accounting for " +
            "only 35-45 jets, strict syllabus and aircrew flight limitations on students and " +
            "pilots flying multiple times in one day.  Tools reduced manpower requirement by 50%."]
    }, {
        employer: "USAF",
        title: "Afghan Air Advisor, Instructor Pilot and Chief of Education (C-208B)",
        location: "Kandahar, Afghanistan",
        dates: "Jan - Dec 2013",
        description: ["• Designed and integrated Dari language student record database adopted at " +
            "defense language schools nationwide.  Accountability bolstered to 100% across country.",
            "• Authored 1st ever vocational aptitude battery tailored to foreign military with 40% " +
            "literacy rate.  Set entry requirements and allowed measured and efficient alignment of " +
            "4,000+ personnel into strength matched occupations and positions.",
            "• Coached weekly training review panel tracking nearly training 300 events per month and " +
            "on-the-job training records for over 900 active military personnel.",
            "• Mentored Afghan pilots in tactical airlift and medical/casualty evacuation in extremely " +
            "mountainous terrain within enemy surface to air engagement zone."]
    }, {
        employer: "USAF",
        title: "Combat Search and Rescue Instructor Pilot (HC-130P)",
        location: "Valdosta, GA",
        dates: "Jul 2008 - Jul 2011",
        description: ["• Test pilot for 1st ever HC-130 aircraft simulator and first test platform " +
            "in 14 years for pararescue operations test squadron researching new employment capabilities.",
            "• Instructed crews of special operations forces for worldwide deployment to conduct " +
            "unconventional warfare, personnel recovery and special reconnaissance.",
            "• Expertly managed 5,000+ training items and special qualifications reducing non-mission " +
            "ready crews by 50%.  Unit fully mission capable first time in 4 years."]
    }, {
        employer: "USAF",
        title: "Tactical Airlift Pilot (C-130E/H1)",
        location: "Fayetteville, NC",
        dates: "Jul 2005 - Sep 2008",
        description: ["• Reviewed mission tasking and intelligence information to plan, command and " +
            "execute tactical airlift operations in austere locations with a crew of six.",
            "• Created electronic mission planning tools to support deployed airlift crews in " +
            "accomplishment of 2,000+ missions with unprecedented 97% success rate."]
    }, {
        employer: "USAF",
        title: "B-52H Maintenance Technician",
        location: "Shreveport, LA",
        dates: "Sept 1999 - Nov 2002",
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
            // var m = ".skills:eq(" + j + ")";
            $(".work-entry:last").append(l);
            // while (k < bio.skills[skillset].length) {
            //     var n = HTMLskills.replace("%data%", bio.skills[skillset][k]);
            //     $(m).append(n);
            //     k += 1;
            // }
            j += 1;
        }
    }
};

work.display();

work.deployments = [ "Diego Garcia", "Ali Al Salem Air Base, Kuwait", "Camp Lemonnier, Djibouti" ];

var projects = {
    projects: [ {
        title: "Web Crawler",
        dates: "Dec 2014",
        description: "Web Crawler",
        images: [ "http://lorempixel.com/400/200/technics", "http://lorempixel.com/400/200/business" ]
    }, {
        title: "Web Resume",
        dates: "Jan 2015",
        description: "Resume",
        images: [ "http://lorempixel.com/400/200/transport", "http://lorempixel.com/400/200/abstract" ]
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