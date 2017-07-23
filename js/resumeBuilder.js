var bio = {
    'name': "Noussair Erassifi",
    'role': "Front End Developer",
    'contacts': {
        'mobile': "832-745-0493",
        "email": "n.erassifi@gmail.com",
        "github": "enoussair",
        "location": "Houston"
    },
    "biopic": "images/profile.jpeg",
    "welcomeMessage": "Welcome to my resume! I'm glad you could make it.",
    "skills": ["HTML", "CSS", "JavaScript", "Microsoft Excel"]
};

var work = {
    "jobs": [{
        "title": "Tutor",
        "employer": "Scholar Enrichment Program",
        "dates": "2014 - May 2017",
        "location": "Houston",
        "description": "Tutored college students, mainly Freshmen and Sophomore, in subjects such as Calculus, Chemistry, and Physics during the Fall and Spring semesters Worked closely with group of five incoming Freshmen to help them transition into college while teaching them Calculus, Chemisty, and Biology during Summer semester."
    }, {
        "title": "Patient Transporter / Office Aide",
        "employer": "1st Choice Accident & Injury",
        "dates": "2015",
        "location": "Houston, Texas - 77072",
        "description": "Transported clinic patients to and from clinic / Helped with office paperwork such as maintainig medical treatment records and utilizing specific clinical software to update patient information / Used Microsoft Excel to keep track of patient billing."
    }]
};

var education = {
    "schools": [{
        "name": "University of Houston Main Campus",
        "dates": "2014 - current",
        "location": "Houston",
        "majors": ["Mechanical Engineering"],
        "degree": "Bachelors of Science"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front-End Web Developer Nanodegree",
        "dates": "2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "school": "MITx",
        "title": "Intro to Computer Science and Programming Using Python",
        "dates": "2017",
        "url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-10"
    }]
};

var projects = {
    "project": [{
            "title": "2017 Texas A&M Regional Engineering Conference",
            "dates": "2017",
            "description": "Collaborated with five-member group to develop a machine to launch a bean bag to a location five meters away. Maximized cost efficiency when designing the prototype. Created test area for trialing the model before final testing.",
            "images": ["https://unsplash.it/300/200", "https://placeimg.com/300/200/nature"]
        },
        {
            "title": "BB Separator",
            "dates": "2016",
            "description": "Worked in a group of four to develop an apparatus that transported 4000 BB pellets 12 inches vertically and horizontally then split them equally into two containers. Utilized Creo Parametric to draft and describe prototype. Designed a lightweight, cost efficient model. Earned First Place in design.",
            "images": ["https://placeimg.com/300/200/arch", "https://placeimg.com/300/200/nature"]
        }, {
            "title": "Portfolio Project",
            "dates": "2016",
            "description": "Wrote the HTML and CSS code for an online portfolio mockup as part of the Front-End Web developer program at Udacity.com",
            "images": ["https://placeimg.com/300/200/tech", "https://placeimg.com/300/200/nature "]
        }
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);



    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(formattedbioPic);

    if (bio.skills.length !== 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedskills = HTMLskills.replace("%data%", skill);
            $("#header").append(formattedskills);
        });
    };
};

bio.display();

work.display = function display() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

        $(".work-entry:last").append(formattedEmployer + formattedTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);

        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    });
}

work.display();

function inName(name) {
    var nameArr = name.split(" ");
    var firstName = nameArr[0];
    var lastName = nameArr[1];
    lastName = lastName.toUpperCase();
    firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    return firstName + " " + lastName;
};

$("#main").append(internationalizeButton);

projects.display = function() {
    projects.project.forEach(function(proj) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", proj.title);
        var formattedDates = HTMLprojectDates.replace("%data%", proj.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", proj.description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        proj.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        })
    });
};

projects.display();

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchooldDgree = HTMLschoolDegree.replace("%data%", school.degree);

        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);

        school.majors.forEach(function(diploma) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", diploma);
            $(".education-entry:last").append(formattedSchoolMajor, formattedSchooldDgree);
        })
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", course.url);

        $(".education-entry:last").append(formattedOnlineTitle, formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedUrl);
    });
};



education.display();

$("#mapDiv").append(googleMap);
