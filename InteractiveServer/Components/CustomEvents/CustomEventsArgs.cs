using Microsoft.AspNetCore.Components;

namespace InteractiveServer.Components.CustomEvents
{
    public class ScrollTopEventArgs : EventArgs
    {
        public string? Message { get; set; }
    }

    [EventHandler("onscrolltop", typeof(ScrollTopEventArgs),
    enableStopPropagation: true, enablePreventDefault: true)]

    [EventHandler("oncustomscrolltop", typeof(ScrollTopEventArgs),
    enableStopPropagation: true, enablePreventDefault: true)]
    public static class EventHandlers
    {
    }
}
