Multi container deployment: 

This process, will have travis make the production build, and push to aws ebs.

* build a Dockerfile for every folder in this project
* add travis.yml file
* link travis to github repo

the travis pipeline will push images to docker hub.
AWS EBS will pull the images from docker hub using the Dockerrun.aws.json file

The redis and postgres services in Production will run on AWS elasticcache and RDS respectively.
they have to be created on the aws console. 
The connection from the databases to the the ebs instance will be configured
via vpc security groups.

Environment variables are different from this computer to EBS. They have to be configured in EBS console.