module ApplicationHelper
  def collect_javascript_files(*paths)
    paths.collect do |path|
      Dir[config.javascripts_dir + File::SEPARATOR + path].map { |s| s.sub(config.assets_dir, "") }
    end
  end

  def js_init
    Haml::Engine.new(
      ":javascript
        $(function(){
           App.views.#{controller_name}.#{action_name.titleize}.init();
        });").render
  end
end
