---
title: "Get Started with MongoDB: Quick and Easy Installation Guide for The
  Latest version (6.0.4)"
description: " MongoDB, otherwise known as MongoDataBase is a popular and
  powerful open-source NoSQL database developed by a company called MongoDB,
  Inc., which was founded in 2007 by Dwight Merriman, Eliot Horowitz, and Kevin
  Ryan. The initial release of MongoDB was in 2009."
author: Egbonu Kenechukwu
date: 2023-04-13T19:19:27.088Z
image: https://miro.medium.com/v2/resize:fit:640/format:webp/1*QJnvahq_EBdUGjYQUYrhvA.png
tags:
  - post
  - featured
  - tech
ImageAlt: MongoDB
---
# Overview of MongoDB

M**ongoDB**, otherwise known as MongoDataBase is a popular and powerful open-source NoSQL database developed by a company called **MongoDB, Inc.**, which was founded in 2007 by Dwight Merriman, Eliot Horowitz, and Kevin Ryan. The initial release of MongoDB was in 2009. Since then, MongoDB has become one of the most popular NoSQL databases, with a vibrant community of developers and users around the world. This NoSQL database provides flexible and scalable data storage solutions. It is designed to handle large amounts of unstructured data, which makes it an ideal choice for modern web and mobile applications that require a dynamic and scalable database backend.

MongoDB is known for its flexible data structure design, which allows developers to easily adapt their data structures as their application/software grows. With features such as **automatic sharding( the automatic assignment of data to different shards/partitions based on something called a shard key)** and **replica sets (this is backing up data to avoid total loss)**, MongoDB can also provide high availability and fault tolerance for mission-critical applications.

In this article, I will walk you through the process of **installing MongoDB** on your local machine, step by step. I will also cover all the necessary prerequisites, such as **hardware and software requirements**, and guide you through the process of **downloading and installing MongoDB** on various operating systems, including Windows, Mac, and Linux.

I will equally show you how to configure MongoDB to customize the installation, and how to start the MongoDB server to verify that the installation was successful. Whether you’re a developer just getting started with MongoDB or an experienced one looking to brush up on your installation skills, this article has everything you need to get up and running with MongoDB in no time.

Before we dive into the installation process, let’s take a closer look at some of the key features and benefits of MongoDB, and how it differs from traditional relational databases. This will help you understand why MongoDB is such a powerful tool for modern application development, and how it can help you build better, more scalable, and more flexible applications.

Data Management has always been a huge topic and focus since the advent of the internet and large computer-based systems which required storage of any form of information and bytes of data for all kinds of reasons. Initially, we had the **traditional relational database** called **Structured Query Language or SQL** for short that uses a table-based structure to store and organize data. This form of database management is typically organized into tables with rows and columns, and each column is defined by a specific data type, such as a string or integer.

SQL was developed in the 1970s by IBM researchers Edgar Codd and Chris Date. SQL databases became popular in the 1980s and 1990s and have been widely used in enterprise applications ever since.

SQL’s counterpart which is the NoSQL fully described as “Not only SQL” emerged in the early 2000s as an alternative to Structured Query Language databases. NoSQL databases were developed to address some of the limitations of SQL databases which are but not limited to:

1. **Scalability**: SQL databases can be difficult to scale horizontally (i.e., across multiple servers), which limits their ability to handle large amounts of data or high levels of traffic. NoSQL databases, on the other hand, are designed to scale easily and can handle large amounts of data across multiple servers.
2. **Flexibility:** SQL databases require a fixed database structure/schema, which means that the structure of the data must be defined before it can be added to the database. This can be limiting in situations where the structure of the data is not known in advance, or where the data is highly variable. NoSQL databases, on the other hand, are designed to be more flexible and can handle unstructured or semi-structured data.
3. **Performance:** SQL databases can be slower than NoSQL databases when it comes to handling large amounts of data or complex queries. This is because SQL databases are designed to enforce strict data consistency, which can slow down performance in certain situations. NoSQL databases, on the other hand, are designed for high performance and can handle large amounts of data with ease.
4. **Cost:** SQL databases can be expensive to license and maintain, especially for large enterprise applications. NoSQL databases, on the other hand, are most of the time, open-source or have lower licensing costs, which can make them more affordable for small and medium-sized businesses.
5. **Agility:** SQL databases can be difficult to change or modify once they are in production, which can limit the agility of development teams. NoSQL databases, on the other hand, are designed to be more agile and can handle changes and modifications more easily.

> *SQL databases include **MySQL, PostgreSQL, Oracle, and Microsoft SQL Server.** SQL databases are commonly used in traditional enterprise applications, where data consistency and transactional integrity are critical.*
>
> *NoSQL databases include **MongoDB, Cassandra, Couchbase, and Amazon DynamoDB.** NoSQL databases are commonly used in modern web applications, where the need for flexibility and scalability is greater than the need for strict data consistency.*

# Prerequisites for Installing MongoDB

## Software Requirements:

* Windows 7 or later (64-bit)
* MongoDB Community Server
* MongoDB Compass

## Hardware Requirements:

* The MongoDB Agent must be installed only on 64-bit architectures.
* If you use AWS EC2 instances, you should use a minimum of an `m3.medium` instance. (Read more here: [aws.amazon.com/ec2/getting-started](https://aws.amazon.com/ec2/getting-started/))
* 4+ GB RAM.
* At least 10 GB of free disk space plus whatever space is necessary to hold your MongoDB data.

# Downloading MongoDB

MongoDB is available in two server editions: ***Community* and *Enterprise*. In this article, we are going to be focusing on downloading the community server edition which is free and open source. The following is a step-by-step guide to downloading MongoDB.**

**Step1:** Type in the following web address to go to the download page: <https://www.mongodb.com/try/download/community>

![](https://miro.medium.com/v2/resize:fit:525/0*kR2TdNpu5IeqeobF.png)

**Step2:** On the page loaded, you will see a sort of form which has a dropdown at all 3 levels. In the **Version** dropdown, select preferably the latest MongoDB version except for special reasons.

**Step3:** Coming to the **platform** option, the website automatically detects your operating system but in cases in which this does not work for you, select the **desired operating system** you would like to run it on.

**Step4:** In the **Package** dropdown, select **msi**. Selecting Zip is equally good if you don’t want MongoDB to almost automatically run in the background even when you are not using it.

**Step5:** Finally Click **Download**.

# Installing MongoDB

**Step 1*:*** Go to the directory where you downloaded the **MongoDB installer** (`.msi` file). By default, this is your `Downloads` directory.

**Step 2:** Double-click the `.msi` file.

**Step 3:** Click on the **Run** tab to continue.

![](https://miro.medium.com/v2/resize:fit:351/0*QcD5fuRaFR7D3bk4.png)

**Step 4:** Click on the **Next** tab on the new wizard window.

![](https://miro.medium.com/v2/resize:fit:371/0*EqYbAkd7h4vhEa0p.png)

**Step 5:** Accept the terms of the license agreement by **ticking** the box and then clicking “**Next”.**

![](https://miro.medium.com/v2/resize:fit:373/0*1X3mJD-Ubf6fuDtW.png)

**Step 6:** Choose **Complete** as the preferred setup type and click **Next.**

![](https://miro.medium.com/v2/resize:fit:370/0*buerL7NZHkMy8sgm.png)

**Step 7:** The option “**Install MongoDB as a service**” comes pre-ticked. Leave it as it is. Then click **Next.**

![](https://miro.medium.com/v2/resize:fit:374/0*1C6OD78ruHYAmcX4.png)

**Step 8:** A new window appears Where there is an option to tick “**Install MongoDB Compass”** this option uses extra data for downloading the MongoDB compass. so untick if you do not have extra data to download. After making your choice, click **Next.**\
`MongoDB Compass is a powerful GUI for querying, aggregating, and analyzing your MongoDB data in a visual environment.`

![](https://miro.medium.com/v2/resize:fit:371/0*EwatQSyy2yhq_mSW.png)

**Step 9:** Click on **Install** to continue the installation process.

![](https://miro.medium.com/v2/resize:fit:371/0*q13dGeR_Mya_T2oU.png)

**Step 10:** The Wizard goes on to finish the installation. If you have chosen earlier on to install MongoDB Compass then this installation might take longer for you because you will have to download extra resources from the net.

![](https://miro.medium.com/v2/resize:fit:373/0*9KPybDBO7lsP8rfV.png)

**Step11:** Once the installation is complete, you can click the **finish** button

![](https://miro.medium.com/v2/resize:fit:373/1*00niPF_eJjdoGJjHPmUyUw.png)

# Conclusion

To sum up, MongoDB is a widely used open-source NoSQL database that offers adaptable and expandable data storage capabilities. In this article which is part one, we covered the essential steps for downloading and installing MongoDB. However, to utilize the MongoDB Shell, which is now the recommended command-line interface for MongoDB, we will need to download and install MongoSH separately. It’s worth noting that the legacy mongo shell has been removed from MongoDB version 6.0 and above, and therefore, the MongoDB Shell (`mongosh`) is not installed with the MongoDB Server. Read on to part two to understand all the processes needed to install and run Mongo.