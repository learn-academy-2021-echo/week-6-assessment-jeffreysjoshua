# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# this code is creating a class called BlogPostsController that inherits from a parent class called ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2)
# This code is creating an instance variable named @posts, and assigning it an active record query that gets all of the rows from the BlogPost model.
    @posts = BlogPost.all
  end

  def show
    # ---3)
# This code is creating an instance variable named @post, and assigning it the value of a specific row from the BlogPost model, which is located at the index of the entered paramater (you get one instance of the class back)
    @post = BlogPost.find(params[:id])
  end

  # ---4)
# This code is creating a controller method, called new. New allows you to creat a form which a user can input text into (this can be for a user to add a new blog post, for example).  New is considered a "Read" operation.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
  # This code is creating an instance variable, for the controller method "create", called @post. @post is assigned to the value of adding to the BlogPost model by creating a new row. The create method is also set up to expect input paramaters, so that an empty blog post is not added to the table.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  #This code is creating a controller method called "edit". Edit, like "new", produces a form. Edit is actually a "get" request, rather than an "patch" request, because it only produces a display, for the user to read, which contains the contents of what is to be updated with the next controller method.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #This code is calling on the controller method "update", to change the content of the original blog post, to accept the changes made by the user; update is a patch request. This method is being implemented on the @post instance variable, which is being assinged the value of a specific blog post, located at the index of the input paramaters. This method is also requiring the blog post paramaters, so that a blog post cannot be updated to an empty blog post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      #This code is creating the instructions for a situation in which an attempt to implement the controller method "destroy", was unsucessfull. Specifically, these instructions are redirecting the url to the blog post path, located at the @post instance variable. The @post instance variable is assigned the value of a specific row within the blog post model. Therefor, if the destroy method is unsucessfull, the user will be redirected back to the specific post they were trying to delete.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # This code is written to protect the paramaters method, everything written below private can only be accessed within the class.
  private
  def blog_post_params
    # ---10)
    #This code is written to complete the create method, which requires params. We are defining the method of blog_post_params. This code is requiring that all interaction that occurs happens only to the blog_post model, and that the specific changes that are permitted are to update the columns within the table- in this case title and content.
    params.require(:blog_post).permit(:title, :content)
  end
end
