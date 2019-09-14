---
title:  "Remember the Milk Syntax"
tags: ["organisation", "linux"]
---

### Smart Add  

> <pre>
> Due Date          -         ^ date/time  
> Priority          -         ! priority  
> List and Tags     -         # list/tag  
> Location          -         @ location  
> Repeat            -         * how often 
> Time Estimate     -         = time est.  
> URL               -         Begin with http://
> </pre>
<!--more-->
### RTM CLI

><pre>
>-V, --version            output the version number
>-p, --plain              do not use styled/colored text (overrides --color)
>-c, --color              force the use of styled/colored text
>-s, --status             toggle the display of the status spinner
>-x, --completed [value]  set display of completed tasks (true/false/number of days)
>-d, --hideDue [value]    hide tasks due more than n days from today (false/number of days)
>-f, --config [file]      specify configuration file
>-h, --help               output usage information
>    
>    
>   Commands:
>    
>add|a [task...]                     Add a new Task
>addList|al [name] [filter...]       Add a new List or Smart List
>addTags|at [index] [tags...]        Add one or more tags to a Task
>comp|x [indices...]                 Complete one or more Tasks
>decPri|- [indices...]               Decrease the Priority of one or more Tasks
>due [index] [due...]                Set the Due Date of a Task
>edit [index] [name...]              Change the name of a Task
>incPri|+ [indices...]               Increase the Priority of one or more Tasks
>lists|l                             Display all lists
>login                               Add RTM User information
>logout                              Remove RTM User information
>ls [filter...]                      List all tasks sorted first by list then by priority
>lsd [filter...]                     List all tasks sorted first by due date then by priority
>lsp [filter...]                     List all tasks sorted first by priority then due date
>move|mv [index] [list...]           Move Task to a different List
>planner [start] [filter...]         Display tasks in a weekly planner (start: sun, mon, today)
>postpone|pp [indices...]            Postpone one or more Tasks
>pri|p [index] [priority]            Change Task Priority
>remove|rm [indices...]              Remove one or more Tasks
>removeList|rml [name...]            Remove a List
>removeTags|rmt [index] [tags...]    Remove one or more tags from a Task
>renameList|mvl [oldName] [newName]  Rename a List
>reset                               Reset cached task indices
>tags|t                              Display all tags
>uncomp|unc [indices...]             Mark one or more Tasks as not complete
>whoami                              Display RTM user information
>today                               Display prioritized tasks and tasks due or completed today</pre>
