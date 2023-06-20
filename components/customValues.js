import SwiftSearchImg from '../public/project-image/swift-search.png'
import HabbitSpaceImg from '../public/project-image/habbit-space.png'
import AppointMeetImg from '../public/project-image/appoint-meet.png'
import ParkSpotImg from '../public/project-image/park-spot.png'
import EmployeeManagementSystemImg from '../public/project-image/employee-management-system.png'
import MissingPersonReportImg from '../public/project-image/missing-person-report.png'
import VehicleSpeedDetectionImg from '../public/project-image/vehicle-speed-detection.png'
import SmartHomeImg from '../public/project-image/home-automation.png'
import PomodoroTimerImg from '../public/project-image/pomodoro-timer.png'
import VolumeLimiterImg from '../public/project-image/volume-limiter.png'
import VacFaceImg from '../public/project-image/vacface.png'
import Writeit from '../public/project-image/writeit.png'
import Noteit from '../public/project-image/noteit.png'
import javaSvg from '../public/technology-icon/java.svg'
import javaScriptSvg from '../public/technology-icon/javascript.svg'
import typeScriptSvg from '../public/technology-icon/typescript.svg'
import pythonSvg from '../public/technology-icon/python.svg'
import cSharpSvg from '../public/technology-icon/c-sharp.svg'
import opencvSvg from '../public/technology-icon/opencv.svg'
import arduinoSvg from '../public/technology-icon/arduino.svg'
import androidSvg from '../public/technology-icon/android.svg'
import nodejsSvg from '../public/technology-icon/nodejs.svg'
import djangoSvg from '../public/technology-icon/django.svg'
import reactSvg from '../public/technology-icon/react.svg'
import EjsSvg from '../public/technology-icon/ejs.svg'
import postgresqlSvg from '../public/technology-icon/postgresql.svg'
import expressSvg from '../public/technology-icon/express.svg'
import VercelSvg from '../public/technology-icon/vercel.svg'
import MysqlSvg from '../public/technology-icon/mysql.svg'
import dotNetSvg from '../public/technology-icon/dotnet.svg'
import jwtSvg from '../public/technology-icon/jwt.svg'
import mongodbSvg from '../public/technology-icon/mongodb.svg'
import electronSvg from '../public/technology-icon/electron.svg'
import redisSvg from '../public/technology-icon/redis.svg'
import azureSvg from '../public/technology-icon/azure.svg'
import dockerSvg from '../public/technology-icon/docker.svg'
import githubActionsSvg from '../public/technology-icon/github-actions.svg'
import elasticsearchSvg from '../public/technology-icon/elasticsearch.svg'
import expoSvg from '../public/technology-icon/expo.svg'
import chakraUiSvg from '../public/technology-icon/chakra-ui.svg'
import kibanaSvg from '../public/technology-icon/kibana.svg'
import digitalOceanSvg from '../public/technology-icon/digital-ocean.svg'
import pwaSvg from '../public/technology-icon/pwa.svg'
import uiKittenSvg from '../public/technology-icon/ui-kitten.svg'
import antDesignSvg from '../public/technology-icon/ant-design.svg'
import herokuSvg from '../public/technology-icon/heroku.svg'

import Cppsvg from '../public/technology-icon/C++logo.svg'
import Leetcode from '../public/project-image/leetcode.png'

import jestSvg from '../public/technology-icon/jest.svg'
import playwrightSvg from '../public/technology-icon/playwright.svg'
import htmlSvg from '../public/technology-icon/html-5.svg'
import cssSvg from '../public/technology-icon/css-3.svg'
import sassSvg from '../public/technology-icon/sass.svg'
import nextjsSvg from '../public/technology-icon/nextjs.svg'
import gatsbySvg from '../public/technology-icon/gatsby.svg'
import nginxSvg from '../public/technology-icon/nginx.svg'
import gitSvg from '../public/technology-icon/git-icon.svg'
import elkSvg from '../public/technology-icon/elk.svg'
import datadogSvg from '../public/technology-icon/datadog.svg'

export let projects = [
  {
    title: 'Write It',
    type: 'Web Application',
    projectURL: 'swift-search',
    projectImg: Writeit,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'WriteIt is all in one notebook for your essetial daily day to day notes.',
    descriptionLong:
      'A react based application used to create , update the text content on the local storage and render it on main site and thus provide the delete functionality to delete the text from the local storage.',
    button: {
      viewCodeUrl:
        'https://write-it-react.netlify.app/',
      viewProjectUrl: 'https://write-it-react.netlify.app/',
    },
    technologyUsed: [
      { name: 'ReactJs', img: reactSvg },
      { name: 'Javascript', img: javaScriptSvg },
      { name: 'Css', img: cssSvg },
      


    ],
  },
  {
    title: 'Shortify',
    type: 'Web Application',
    projectURL: 'Shortify',
    projectImg: HabbitSpaceImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'URL shortner application using NodeJs & MongoDB',
    descriptionLong:
      'This is an example of how to make a application which shortens the url entered by the client.ShortId A npm module use to generate the short id data for a non dependable (STRING) and here converting the entered url as form such that the rendering of short id enables to give the URL of a particular link.MongoDB is used for checking if the entered url is in Database. If yes then simply it will print it and there is no need to generate a new short url otherwise it will generate a new short url and render it on main page',
    button: {
      viewCodeUrl:
        'https://github.com/jatin-dhingra/Shortify',
      viewProjectUrl: 'https://youtu.be/ZScaamw_pKA',
    },
    technologyUsed: [
      { name: 'Nodejs', img: nodejsSvg },
      { name: 'Javascript', img: javaScriptSvg },
      { name: 'Expressjs', img: expressSvg },
      { name: 'Css', img: cssSvg },

    ],
  },
  {
    title: 'ListWrapper',
    type: 'Web Application',
    projectURL: 'ListWrapper',
    projectImg: HabbitSpaceImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'A list Wrapper is Project that concludes of the adding new components information into it, able to check for the error causing state, handle it and manage it with the correct warning.',
    descriptionLong:
      'A list Wrapper is Project that concludes of the adding new components information into it, able to check for the error causing state, handle it and manage it with the correct warning. Features are :Rendering of Seperate components,Error causing state and it  management, Overlaping of one components onto another',
    button: {
      viewCodeUrl:
        'https://github.com/jatin-dhingra/List_Wrapper',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: 'Reactjs', img: reactSvg },
      { name: 'Nodejs', img: nodejsSvg },
      { name: 'Javascript', img: javaScriptSvg },
      { name: 'Expressjs', img: expressSvg },
      { name: 'Css', img: cssSvg },

    ],
  },
  
  {
    title: 'CRUD API NODEjs',
    projectURL: 'crud api',
    type: 'Web Application',
    projectImg: AppointMeetImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'This is a testing phase of fully functional api with CRUD application in Nodejs and MongoDb',
    descriptionLong:
    'This is a testing phase of fully functional api with CRUD application in Nodejs and MongoDb',
    button: {
      viewCodeUrl: 'https://github.com/jatin-dhingra/CRUD_API_NODEJS',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: 'Javascript', img: javaScriptSvg },
      { name: 'Nodejs', img: nodejsSvg },
      { name: 'ExpressJs', img: expressSvg },
      { name: 'MongoDb', img: mongodbSvg },
      
    ],
  },
  {
    title: 'Wage Tracker',
    projectURL: 'Wage Tracker',
    type: 'Web Application',
    projectImg: SmartHomeImg,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'This is daily wage tracker of a particular person who can apply CRUD operations',
    //   'Park Spot is a mobile application to find the empty parking lot around you using the inbuilt map functionality and automate and the parking entry and exit process using QR code. This application collects data on each entry and exit of the vehicle and analyses it for the best business decisions.',
    descriptionLong:
      'This is daily wage tracker of a particular person who can apply CRUD operations',
    button: {
      viewCodeUrl:
        'https://github.com/jatin-dhingra/wage-tracker',
      viewProjectUrl: '',
    },
    technologyUsed: [
      { name: 'Reactjs', img: reactSvg },
      { name: 'ExpressJs', img: expressSvg },
      { name: 'NodeJs', img: nodejsSvg },
      { name: 'javascript', img: javaScriptSvg },
      { name: 'Css', img: cssSvg },
      
    ],
  },
  {
    title: 'Note It',
    projectURL: 'Note It',
    type: 'Web Application',
    projectImg: Noteit,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'This is daily wage tracker of a particular person who can apply CRUD operations',
    //   'Park Spot is a mobile application to find the empty parking lot around you using the inbuilt map functionality and automate and the parking entry and exit process using QR code. This application collects data on each entry and exit of the vehicle and analyses it for the best business decisions.',
    descriptionLong:
      'This is daily wage tracker of a particular person who can apply CRUD operations',
    button: {
      viewCodeUrl:
        'https://github.com/jatin-dhingra/NoteIt',
      viewProjectUrl: 'https://noteit-jatin.netlify.app/',
    },
    technologyUsed: [
      { name: 'ExpressJs', img: expressSvg },
      { name: 'NodeJs', img: nodejsSvg },
      { name: 'javascript', img: javaScriptSvg },
      { name: 'Html', img: htmlSvg },
      { name: 'Css', img: cssSvg },
      
    ],
  },
  {
    title: 'DS And Algorithms',
    projectURL: 'Data Structures And Algorithms',
    type: 'Storage of Codes',
    projectImg: Leetcode,
    // DetailsImage:AppointMeetDetailsImage,
    descriptionShort:
      'Contains solutions and description of DSA based question from LEETCODE, GeekForGeeks, HackerRank',
    descriptionLong:
      'Contains solutions and description of DSA based question from LEETCODE, GeekForGeeks, HackerRank',
    button: {
      viewCodeUrl:
        'https://github.com/jatin-dhingra/DATA_STRUCTURE_ALGORITHMS',
      viewProjectUrl: 'https://leetcode.com/jatin_dhingra/',
    },
    technologyUsed: [
      { name: 'C++', img: Cppsvg },
      { name: 'Java', img: javaSvg },
      { name: 'Python', img: pythonSvg },
      { name: 'Javascript', img: javaScriptSvg },
     
    ],
  },
  
]
// export default project

export let technologyList = [
  { name: 'C++', icon: Cppsvg },
  { name: 'Java', icon: javaSvg },
  { name: 'Python', icon: pythonSvg },
  { name: 'HTML', icon: htmlSvg },
  { name: 'CSS', icon: cssSvg },
  { name: 'SASS', icon: sassSvg },
  { name: 'JavaScript', icon: javaScriptSvg },
  { name: 'React', icon: reactSvg },
  { name: 'TypeScript', icon: typeScriptSvg },
  { name: 'NextJs', icon: nextjsSvg },
  { name: 'Vercel', icon: VercelSvg },
  { name: 'Git', icon: gitSvg },
  { name: 'Node Js', icon: nodejsSvg },
  { name: 'ExpressJs', icon: expressSvg },
  { name: 'Django', icon: djangoSvg },
  { name: 'MongoDB', icon: mongodbSvg },
  { name: 'MySql', icon: MysqlSvg },
  { name: 'Github Actions', icon: githubActionsSvg },
  { name: 'NginX', icon: nginxSvg },
  { name: 'Heroku', icon: herokuSvg },
 
]
