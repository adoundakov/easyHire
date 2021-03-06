class Api::CompaniesController < ApplicationController
  def index
    if params[:search_type] == 'SEARCH'
      @companies = Company.search_by_name(params[:query]).includes(:postings, :reviews)
    else
      @companies = Company.all.includes(:postings, :reviews)
    end
  end

  def show
    @company = Company.find(params[:id])
  end

  # TODO: Implement These later
  #
  # def update
  # end
  #
  # def destroy
  # end
end
