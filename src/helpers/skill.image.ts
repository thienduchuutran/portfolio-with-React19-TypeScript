import afterEffects from 'assets/svg/skills/after-effects.svg';
import bootstrap from 'assets/svg/skills/bootstrap.svg';
import css from 'assets/svg/skills/css.svg';
import docker from 'assets/svg/skills/docker.svg';
import git from 'assets/svg/skills/git.svg';
import html from 'assets/svg/skills/html.svg';
import javascript from 'assets/svg/skills/javascript.svg';
import mongoDB from 'assets/svg/skills/mongoDB.svg';
import mysql from 'assets/svg/skills/mysql.svg';
import postgresql from 'assets/svg/skills/postgresql.svg';
import python from 'assets/svg/skills/python.svg';
import react from 'assets/svg/skills/react.svg';
import typescript from 'assets/svg/skills/typescript.svg';
import nestjs from 'assets/svg/skills/nestjs.svg';
import redux from 'assets/svg/skills/redux.svg';
import nodejs from 'assets/svg/skills/nodejs.svg';
import expressjs from 'assets/svg/skills/expressjs.svg';



export const skillsImage = (skill: string) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'docker':
            return docker;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'python':
            return python;
        case 'git':
            return git;
        case 'nestjs':
            return nestjs;
        case 'redux':
            return redux;
        case 'node.js':
            return nodejs
        case 'express.js':
            return expressjs
        default:
            break;
    }
}
