# frozen_string_literal: true

require 'spec_helper'
require_relative '../../lib/BreadCrumbs'
require_relative '../../lib/MonitoringConsultationDeskReportsNumberCard'

describe 'iPhone 6/7/8', type: :feature do
  context 'page [/]' do
    before do
      visit '/'
      page.scroll_to('.v-tabs')
      find('#app .v-tabs .v-slide-group__content a[href="#tab-1"]').click
      render_lazy_contents
      page.scroll_to('#MonitoringConsultationDeskReportsNumberCard')
    end

    describe '受診・相談センター 受付件数(MonitoringConsultationDeskReportsNumberCard)' do
      it '項目の値' do
        has_monitoring_consultation_desk_reports_number_card
        has_no_breadcrumbs(id: '#MonitoringConsultationDeskReportsNumberCard')
      end
    end
  end
end
