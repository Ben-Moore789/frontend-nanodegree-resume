/*
Cleaned using http://javascriptbeautifier.com/, which changed all my variable
names before I realized it and didn't have a recent copy backed up.  Oops.
*/

var bio = {
    name: "Ben Moore",
    role: "Web Developer",
    contacts: {
        mobile: "205-712-0012",
        email: "EverSeenaMooseFly@gmail.com",
        github: "Duke-Gizmo",
        twitter: "@BenMoore789",
        location: "Atlanta, GA"
    },
    welcomeMessage: "Welcome to my most Awesome resume!",
    skills: {
        programLanguages: [ "Python", "HTML", "CSS", "JavaScript", "VBA" ],
        isntruction: [ "Aeronautics", "Aerobatics", "Tactical Operations", 
            "Emergency Procedures", "Personnel Recovery Operations" ],
        spokenLanguage: [ "Dari", "French", "Lithuanian" ]
    },
    bioPic: "images/me.jpg",
    skillsets: [ "Familiar Programming Languages:", 
        "Experienced Millitary Instructor Pilot:", "Basic Conversational Languages:" ]
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
        description: "Reviewed syllabus requirements, student progress " + 
            "and weather information. Piloted aircraft and commanded crew. " + 
            "Ensured optimum training opportunities and progress by conducting " + 
            "and supervising student training."
    }, {
        employer: "USAF",
        title: "Afghan Air Advisor, Instructor Pilot and Chief of Education (C-208B)",
        location: "Kandahar, Afghanistan",
        dates: "Jan - Dec 2013",
        description: "Advised Afghan Air Force leadership on managing English " + 
            "language training program. Mentored and trained Afghan aircrew with " + 
            "mission planning, air navigation and mobility oeprations."
    }, {
        employer: "USAF",
        title: "Combat Search and Rescue Instructor Pilot (HC-130P)",
        location: "Valdosta, GA",
        dates: "Jul 2008 - Jul 2011",
        description: "Piloted special operations aircraft and commanded crews of " + 
            "special operations forces for worldwide deployment and assignment to " + 
            "regional unified commands to conduct unconventional warfare, direct action " + 
            "and special reconnaissance. Managed personnel recovery and counter-terrorism " + 
            "operations."
    }, {
        employer: "USAF",
        title: "Tactical Airlift Pilot (C-130E/H1)",
        location: "Fayetteville, NC",
        dates: "Jul 2005 - Sep 2008",
        description: "Piloted aircraft and commanded crew to accomplish operational " + 
            "and training in airlift and airdrop missions. Involved supervision and " + 
            "planning of mission details and reviewing mission tasking, intelligence " + 
            "and weather information. Ensured crew and aircraft were properly briefed, " + 
            "pre-flighted, inspected, loaded, equipped and manned for flight."
    }, {
        employer: "USAF",
        title: "B-52H Maintenance Technician",
        location: "Shreveport, LA",
        dates: "Sept 1999 - Nov 2002",
        description: "Troubleshot and maintained aircraft structures, systems, components " + 
            "and support equipment. Tested repaired components using mockups and test equipment. " + 
            "Adjusted, aligned, rigged and calibrated aircraft systems. "
    } ]
};

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var a = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var b = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var c = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var d = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var e = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(a + b);
        $(".work-entry:last").append(c + d + e);
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