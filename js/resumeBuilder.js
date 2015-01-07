
var work={
	"jobs":[
		{
			"employer":"USAF",
			"title":"Primary Pilot Training Instructor Pilot",
			"location":"Columbus, MS",
			"dates":"Aug 2011 - Jan 2015",
			"description":"Reviewed syllabus requirements, student progress and weather information. Piloted aircraft and commanded crew. Ensured optimum training opportunities and progress by conducting and supervising student training."
		},
		{
			"employer":"USAF",
			"title":"Afghan Air Advisor, Instructor Pilot and Chief of Education",
			"location":"Afghanistan",
			"dates":"Jan - Dec 2013",
			"description":"Advised Afghan Air Force leadership on managing English language training program. Mentored and trained Afghan aircrew with mission planning, air navigation and mobility oeprations."
		},
        {
            "employer":"USAF",
            "title":"Combat Search and Rescue Instructor Pilot",
            "location":"Valdosta, GA",
            "dates":"Jul 2008 - Jul 2011",
            "description":"Piloted special operations aircraft and commanded crews of special operations forces for worldwide deployment and assignment to regional unified commands to conduct unconventional warfare, direct action and special reconnaissance. Managed personnel recovery and counter-terrorism operations."
        },
        {
            "employer":"USAF",
            "title":"Tactical Airlift Pilot",
            "location":"Pope AFB, NC",
            "dates":"Jul 2005 - Sep 2008",
            "description":"Piloted aircraft and commanded crew to accomplish airlift, training and other missions. Planned and prepared for missions. Reviewed mission tasking, intelligence and weather information. Supervised planning, preparation and filing of flight plan and crew briefing. Ensured aircraft was pre-flighted, inspected, loaded, equipped and manned for flight. Performed, supervised or directed navigation, in-flight refueling, and cargo and passenger delivery."
        },
        {
            "employer":"USAF",
            "title":"B-52 Maintenance Technician",
            "location":"Shreveport, LA",
            "dates":"Sept 1999 - Nov 2002",
            "description":"Troubleshot and maintained aircraft structures, systems, components and support equipment. Tested repaired components using mockups and test equipment. Adjusted, aligned, rigged and calibrated aircraft systems. "
        }
	]
};

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

var bio={
	"name":"Duke Gizmo",
	"role":"Web Developer",
	"contacts":{
		"mobile":"205-712-0012",
		"email":"everseenamoosefly@gmail.com",
		"github":"Duke-Gizmo",
		"twitter":"@BenMoore789",
		"location":"Atlanta"
	},
	"welcomeMessage":"Welcome to my most Awesome resume!",
	"skills":["Being Awesome","Rocking","Teaching","Flying"],
	"bioPic":"images/me.jpg"
};

var education={
    "schools": [
        {
            "name": "Webster University Online",
            "city": "Valdosta, GA",
            "degree": "Masters",
            "major": "Information Technology Management",
            "majorShort": "IT Management",
            "yearsAttended": "2009-2010",
            "gradYear": "2010",
            "url":"http://www.webster.edu/masters/information-technology-management.html"
        },
        {
            "name": "Embry Riddle Aeronautical University Worldwide",
            "city": "Shreveport, LA",
            "degree": "BA",
            "major": "Professional Aeronautics",
            "yearsAttended": "2000-2002",
            "gradYear": "2002",
            "url":"http://worldwide.erau.edu/degrees-programs/programs/bachelors/aeronautics/index.html"
        },
        {
            "name": "Udacity",
            "city": "Columbus, MS",
            "degree": "Nano",
            "major": "Front-End Web Developer",
            "yearsAttended": "2014-Present",
            "gradYear": "",
            "url":"https://www.udacity.com/course/nd001"
        }
    ],
    "online courses":[
    	{
    		"title":"Intro to Computer Science",
    		"school":"Udacity",
    		"dates":2014,
    		"url":"https://www.udacity.com/course/cs101"
    	},
    	{
    		"title":"Intro to HTML and CSS",
    		"school":"Udacity",
    		"dates":2014,
    		"url":"https://www.udacity.com/course/ud304"
    	},
    	{
    		"title":"JavaScript Basics",
    		"school":"Udacity",
    		"dates":2014,
    		"url":"https://www.udacity.com/course/ud804"
    	}
    ]
};

var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
var formattedGitHub=HTMLgithub.replace("%data%",bio.contacts.github);
var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
var formattedbioPic=HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcome=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(formattedName+formattedRole);
$("#topContacts").append(formattedMobile+formattedEmail+formattedGitHub+formattedTwitter+formattedLocation);
$("#header").append(formattedbioPic+formattedWelcome);

var skillCount=0;
if(bio.skills.length > 0){
  
  $("#header").append(HTMLskillsStart);

  while(skillCount<bio.skills.length){
  var formattedSkill=HTMLskills.replace("%data%",bio.skills[skillCount]);
  $("#skills").append(formattedSkill);
  skillCount=skillCount+1;
  }
}

function displayWork(){
    for (job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedWorkDate=HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedWorkLoc=HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedWorkDesc=HTMLworkDescription.replace("%data%",work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployer+formattedTitle);
        $(".work-entry:last").append(formattedWorkLoc+formattedWorkDate+formattedWorkDesc);
    }
}

displayWork();

$(document).click(function(loc) { 
    var x=loc.pageX;
    var y=loc.pageY;
    logClicks(x,y);
});

function inName(){
    var finalName = name.trim().split(' ');
    first=finalName[0].toLowerCase();
    last=finalName[1].toUpperCase();
    finalName=first[0].toUpperCase()+first.slice(1)+" "+last;
    console.log(finalName);
    return finalName;
}

$("#main").prepend(internationalizeButton);

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

$("#mapDiv").append(googleMap);