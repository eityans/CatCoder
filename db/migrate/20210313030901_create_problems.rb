class CreateProblems < ActiveRecord::Migration[6.1]
  def change
    create_table :problems do |t|

      t.timestamps
    end
  end
end
