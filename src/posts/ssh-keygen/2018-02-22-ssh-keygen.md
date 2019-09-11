---
title:  "ssh-keygen"
---

Generating a new SSH key

<div class="codeblok">  
ssh-keygen -t rsa -b 4096 [email address]
  </div>
This creates a new ssh key, using the provided email as a label.

Generating public/private rsa key pair.

When you’re prompted to “Enter a file in which to save the key,” press Enter. This accepts the default file location.

<div class="codeblok">  
Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]
  </div>

At the prompt, type a secure passphrase. For more information, see “Working with SSH key passphrases”.

<div class="codeblok">  
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
  </div>

This will have created a key named id_rsa and id_rsa.pub wherever you specified above.

Now you must copy the public part to your server, or if your already on your server then simply to ~/.ssh/authorized_keys

If you’re not on your server you can do this by entering:

<div class="codeblok">  
sudo scp -P XXX ~/.ssh/id_rsa.pub user@machine.domain.com:/home/user/Documents/id_rsa.pub
  </div>

Then on your server simply enter this:

<div class="codeblok">  
sudo mv ~/Documents/id_rsa.pub ~/.ssh/authorized_keys
  </div>

Then on your client simply using the matching id_rsa or id_rsa.ppk file and your good!

Now this may seem simple, but I’ve had problems with permissions for these files for hours once at the beginning. A little tip – authorized_keys should be chmod 600 and .ssh chmod 700. Therefore only the owning user can read and write them. Sshd seems to be picky about this..
