# Main file

The main file should be the only Sass file from the whole code base not to begin with an underscore. This file should
not contain anything but `@use` or `@forward` and comments.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Main file](http://sass-guidelin.es/#main-file)

## Important notes

If you can, __always try to use components__. If you can't and this is too difficult to code it that way, you can refer
to the next section.

## Tips for extending

If you want to extend your codebase, you can use some other folder to keep it ordered.

* layout

  Can be used to add layout specific styles. Used for example for header, footer or sidebar components.

* page

  Can be used to add page-specific styles, like Homepage.

* themes

  Contain all your theme files if you want to keept it in differents files.
