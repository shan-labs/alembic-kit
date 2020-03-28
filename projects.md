---
layout: page
title: Projects
---

<style>
 h3 {
   display:inline;
 }

 details summary::-webkit-details-marker {
   background: url(/assets/imgs/works/yay.gif) center no-repeat;
   color: transparent;
 }
 details[open] summary::-webkit-details-marker {
   background: url(/assets/imgs/works/karenblush.gif) center no-repeat;
   color: transparent;
 }

 details summary {
   list-style-image: url(/assets/imgs/works/yay.gif);
 }
 details[open] summary {
   list-style-image: url(/assets/imgs/works/karenblush.gif);
 }
</style>

<h3>Legend</h3>
- ![Yay](/assets/imgs/works/yay.gif) = Unfold details
- ![Karen Blush](/assets/imgs/works/karenblush.gif) = Refold details
<hr>

{%
    include project.html
    title="NLP TF-IDF Hadoop"
    pitch='NLP analysis of Term Frequency - Inverse Document Frequency using Hadoop'
    description="
    [DESCRIPTION WIP]
    "
    links="GitHub, https://github.com/kkhan01/nlp-tf-idf-hadoop"
    img=false
%}
<hr>
{%
    include project.html
    title="Hetio Net"
    pitch='Big Data Analysis of <a href="https://het.io/">Hetionet</a> - An integrative network of biomedical knowledge'
    description="
    A big data project leveraging document based (<b>MongoDB</b>) and graph based (<b>Neo4j</b>) databases
    =| Populate and query databases for relationships between compounds and diseases [relationships which aren’t readily available]
    "
    links="GitHub, https://github.com/kkhan01/hetio-net"
    img=false
%}
<hr>
{%
    include project.html
    title="Finder"
    pitch="Fiverr + Tinder: Tinder, but for Jobs."
    description="
    [DESCRIPTION WIP]
    "
    links="GitHub, https://github.com/kkhan01/Finder"
    img=false
%}
<hr>
{%
    include project.html
    title="Project Ångström"
    pitch=false
    description="
    FTC Scouting Tool for Relic Recovery
    =| Scouting site for FIRST Tech Challenge (FTC) use as well as for local teams to use internally
    =| Provides statistical analysis of data from The Orange Alliance to allow for greater insights
    "
    links="GitHub, https://github.com/kkhan01/project_angstrom; Live, http://angstrom.stuycs.org/"
    img=false
    video="SG_ar4D-uIM"
%}
<hr>
{%
    include project.html
    title="Brain Battles"
    pitch=false
    description="
    [DESCRIPTION WIP]
    "
    links="GitHub, https://github.com/kkhan01/This_Name_is_Copyrighted-Brain_Battles"
    img=false
    video="RXbPhHFDLuc"
%}
<hr>
{%
    include project.html
    title="Polybius"
    pitch=false
    description="
    [DESCRIPTION WIP]
    "
    links="GitHub, https://github.com/kkhan01/Polybius"
    img=false
%}
<hr>
{%
    include project.html
    title="Poober"
    pitch=false
    description="
    [DESCRIPTION WIP]
    "
    links=false
    img=false
%}
