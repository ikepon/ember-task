class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :complete, :deadline
end
