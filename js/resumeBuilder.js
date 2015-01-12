var bio={
    "name":"Ben Moore",
    "role":"Web Developer",
    "contacts":{
        "mobile":"205-712-0012",
        "email":"EverSeenaMooseFly@gmail.com",
        "github":"Duke-Gizmo",
        "twitter":"@BenMoore789",
        "location":"Atlanta, GA"
    },
    "welcomeMessage":"Welcome to my most Awesome resume!",
    "skills":{
        "programLanguages":["Python","HTML", "CSS","JavaScript"],
        "isntruction":["Aeronautics","Aerobatics","Instrument Conditions",
            "Tactical Operations","Emergency Procedures","Air-Medical Evacuation",
            "Air-to-Air Refueling","Combat Search and Rescue"],
        "spokenLanguage":["Dari", "French", "Lithuanian"]
    },
    "bioPic":"images/me.jpg"
};
bio.display=function(){
    var formattedName=HTMLheaderName.replace("%data%",bio.name);
    var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedName+formattedRole);

    var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGitHub=HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedMobile+formattedEmail+formattedGitHub+formattedTwitter+formattedLocation);
    $("#footerContacts").append(formattedMobile+formattedEmail+formattedGitHub+formattedTwitter+formattedLocation);

    var formattedbioPic=HTMLbioPic.replace("%data%",bio.bioPic);
    var formattedWelcome=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedbioPic+formattedWelcome);
    
    var skillCount=0;
        $("#header").append(HTMLskillsStart);

    while(skillCount<bio.skills.length){
        var formattedSkill=HTMLskills.replace("%data%",bio.skills[skillCount]);
        $("#skills").append(formattedSkill);
        skillCount=skillCount+1;
    }
};
bio.display();

var education={
    "schools": [
        {
            "name": "Udacity",
            "location": "Columbus, MS",
            "degree": "Nano",
            "majors": "Front-End Web Developer",
            "dates": "Currently Enrolled",
            "url":"https://www.udacity.com/course/nd001"
        },
        {
            "name": "Webster University Online",
            "location": "Valdosta, GA",
            "degree": "Masters",
            "majors": "Information Technology Management",
            "dates": "November 2010",
            "url":"http://www.webster.edu/masters/information-technology-management.html"
        },
        {
            "name": "Embry Riddle Aeronautical University Worldwide",
            "location": "Shreveport, LA",
            "degree": "BA",
            "majors": ["Professional Aeronautics"," Minor: Aviation Safety"],
            "dates": "May 2002",
            "url":"http://worldwide.erau.edu/degrees-programs/programs/bachelors/aeronautics/index.html"
        }
    ],
    "onlineCourses":[
        {
            "title":"Intro to Computer Science",
            "school":"Udacity",
            "dates":"Dec 2014",
            "url":"https://www.udacity.com/course/cs101"
        },
        {
            "title":"Intro to HTML and CSS",
            "school":"Udacity",
            "dates":"Dec 2014",
            "url":"https://www.udacity.com/course/ud304"
        },
        {
            "title":"JavaScript Basics",
            "school":"Udacity",
            "dates":"Jan 2015",
            "url":"https://www.udacity.com/course/ud804"
        }
    ]
};
education.display=function(){
    for (school in education.schools){
        $("#education").append(HTMLschoolStart);
        var formSchoolName=HTMLschoolName.replace("%data%",education.schools[school].name);
        var formSchoolTitle=formSchoolName.replace("#",education.schools[school].url);
        var formSchoolLoc=HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formMajor=HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        var formSchoolDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:last").append(formSchoolTitle+formDegree+formSchoolDates);
        $(".education-entry:last").append(formSchoolLoc+formMajor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);
    for (course in education.onlineCourses){
        
        var formOnlineTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
        var formOnlineName=HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
        var formOnlineDates=HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        var formOnlineURL=HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);

        $(".education-entry:last").append(formOnlineTitle+formOnlineName+formOnlineDates);
        $(".education-entry:last").append(formOnlineURL);
    }    
};
education.display();

var work={
	"jobs":[
		{
			"employer":"USAF",
			"title":"Primary Pilot Training Instructor Pilot",
			"location":"Columbus, MS",
			"dates":"Aug 2011 - Jan 2015",
			"description":"Reviewed syllabus requirements, student progress"+
            " and weather information. Piloted aircraft and commanded crew."+
            " Ensured optimum training opportunities and progress by conducting"+
            " and supervising student training."
		},
		{
			"employer":"USAF",
			"title":"Afghan Air Advisor, Instructor Pilot and Chief of Education",
			"location":"Afghanistan",
			"dates":"Jan - Dec 2013",
			"description":"Advised Afghan Air Force leadership on managing English"+
            " language training program. Mentored and trained Afghan aircrew with "+
            "mission planning, air navigation and mobility oeprations."
		},
        {
            "employer":"USAF",
            "title":"Combat Search and Rescue Instructor Pilot",
            "location":"Valdosta, GA",
            "dates":"Jul 2008 - Jul 2011",
            "description":"Piloted special operations aircraft and commanded crews of"+
            " special operations forces for worldwide deployment and assignment to "+
            "regional unified commands to conduct unconventional warfare, direct action"+
            " and special reconnaissance. Managed personnel recovery and counter-terrorism"+
            " operations."
        },
        {
            "employer":"USAF",
            "title":"Tactical Airlift Pilot",
            "location":"Fayetteville, NC",
            "dates":"Jul 2005 - Sep 2008",
            "description":"Piloted aircraft and commanded crew to accomplish airlift, "+
            "training and other missions. Planned and prepared for missions. Reviewed "+
            "mission tasking, intelligence and weather information. Supervised planning, "+
            "preparation and filing of flight plan and crew briefing. Ensured aircraft was "+
            "pre-flighted, inspected, loaded, equipped and manned for flight. Performed, "+
            "supervised or directed navigation, in-flight refueling, and cargo and passenger "+
            "delivery."
        },
        {
            "employer":"USAF",
            "title":"B-52 Maintenance Technician",
            "location":"Shreveport, LA",
            "dates":"Sept 1999 - Nov 2002",
            "description":"Troubleshot and maintained aircraft structures, systems, components"+
            " and support equipment. Tested repaired components using mockups and test equipment."+
            " Adjusted, aligned, rigged and calibrated aircraft systems. "
        }
	]
};
work.display=function(){
    for (job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedWorkLoc=HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedWorkDate=HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedWorkDesc=HTMLworkDescription.replace("%data%",work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer+formattedTitle);
        $(".work-entry:last").append(formattedWorkLoc+formattedWorkDate+formattedWorkDesc);
    }
};
work.display();

var projects={
	"projects":[
		{
			"title":"Web Crawler",
			"dates":"Dec 2014",
			"description":"Web Crawler",
			"images":["http://lorempixel.com/400/200/technics","http://lorempixel.com/400/200/business"]
		},	
		{
			"title":"Resume",
			"dates":"Jan 2015",
			"description":"Resume",
			"images":["http://lorempixel.com/400/200/transport","http://lorempixel.com/400/200/abstract"]
		}
	]
};
projects.display=function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formProjTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        var formProjDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        var formProjDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        
        $(".project-entry:last").append(formProjTitle+formProjDates+formProjDescription);
        for (image in projects.projects[project].images){
            var formProjImages=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
            $(".project-entry:last").append(formProjImages);
        }
    }
};
projects.display();




// function inName(){
//    var finalName = name.trim().split(' ');
//    first=finalName[0].toLowerCase();
//    last=finalName[1].toUpperCase();
//    finalName=first[0].toUpperCase()+first.slice(1)+" "+last;
//    console.log(finalName);
//    return finalName;
//}


$("#mapDiv").append(googleMap);

