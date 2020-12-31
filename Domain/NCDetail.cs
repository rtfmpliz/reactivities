using System;

namespace Domain
{
    public class NCDetail
    {
        public Guid NCId { get; set; }
        public int Line { get; set; }
        public string Partial { get; set; }

        public virtual NC NC { get; set; }
    }
}